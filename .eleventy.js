const { DateTime } = require("luxon");
const navigationPlugin = require('@11ty/eleventy-navigation')
const rssPlugin = require('@11ty/eleventy-plugin-rss')
const imagePlugin = require("@11ty/eleventy-img");
const path = require('path');
const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const EleventyFetch = require("@11ty/eleventy-fetch");

const imageSettings = {
  "widths": [300, 600, 1280],
  "formats": ["avif","webp", "jpeg"],
  "sizes": "100vw"
}

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

const checkImgExists = (src) => {
  if (src && !src.startsWith('http') && !fs.existsSync(src))
    throw new Error(`Can't find img: ${src}`);
}

const imageShortcode = async (src, alt, sizes, title) => {
  if (alt === undefined)
    throw new Error(`Missing "alt" on responsive image from: ${src}`);

  checkImgExists(src);

  try {
      let markup;
      // image plugin seems to lose animation for .gif
      // just cache and serve as is
      if (src.endsWith('.gif')) {
        let imageBuffer = await EleventyFetch(src, {
          duration: "1d",
          type: "buffer",
        });
        let details = await new EleventyFetch.AssetCache(src);
        fs.writeFile(`dev/img/built/${details._hash}.gif`, imageBuffer, function (err) {
          if (err) return console.log(err);
        });
        markup = `<img src='/img/built/${details._hash}.gif' alt='${title}'/>`;
      }
      else
      {
        const metadata = await imagePlugin(src, {
          widths:imageSettings.widths,
          formats:imageSettings.formats,
          urlPath: "/img/built/",
          outputDir: "dev/img/built/",
        });

        markup = imagePlugin.generateHTML(metadata, {
          alt,
          sizes,
          loading: "lazy",
          decoding: "async",
        });
      }

      if (title !== undefined)
        return `<div class="row">
        <div class="col-12 d-flex justify-content-center text-center flex-column">
          ${markup}
          <sup class="mb-2 mt-3" >${title}</sup>
        </div></div>`;
      else
      return markup;
  }
  catch (e) {
    throw new Error(`Error with image ${src} because ${e}`);
  }
};

const responsiveBackgroundShortCode = async (src, bgColor) => {
  if (!src)
    return "";

  checkImgExists(src);

  let stats;
  try {
    stats = await imagePlugin(src, {
      formats: ["webp","jpeg"],
      widths: [320,700,1300,2500],
      urlPath: "/img/built/",
      outputDir: "dev/img/built/",
    });

    for (let i=1; i<4; i++) {
      if (!stats.webp[i])
        stats.webp[i]=stats.webp[i-1];
    }
  }
  catch (e) {
    throw new Error(`Error with background image ${src} because ${e}`);
  }

  const fullScreenBg = `background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: fixed;
      background-color: ${bgColor};`;

  let styles= `
  body {
    ${fullScreenBg}
    background : url('${stats.webp[0].url}');
  }

  @media only screen and (min-width: 320px) {

    /* Small screen, non-retina */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[0].url}');
    }
  }
  
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 320px),
  only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 320px),
  only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 320px),
  only screen and (        min-device-pixel-ratio: 2)      and (min-width: 320px),
  only screen and (                min-resolution: 192dpi) and (min-width: 320px),
  only screen and (                min-resolution: 2dppx)  and (min-width: 320px) { 
  
    /* Small screen, retina, stuff to override above media query */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[1].url}');
    }
  }
  
  @media only screen and (min-width: 700px) {
  
    /* Medium screen, non-retina */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[1].url}');
    } 
  }
  
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 700px),
  only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 700px),
  only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 700px),
  only screen and (        min-device-pixel-ratio: 2)      and (min-width: 700px),
  only screen and (                min-resolution: 192dpi) and (min-width: 700px),
  only screen and (                min-resolution: 2dppx)  and (min-width: 700px) { 
  
    /* Medium screen, retina, stuff to override above media query */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[2].url}');
    } 

  }
  
  @media only screen and (min-width: 1300px) {
  
    /* Large screen, non-retina */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[3].url}');
    } 
  }
  
  @media
  only screen and (-webkit-min-device-pixel-ratio: 2)      and (min-width: 1300px),
  only screen and (   min--moz-device-pixel-ratio: 2)      and (min-width: 1300px),
  only screen and (     -o-min-device-pixel-ratio: 2/1)    and (min-width: 1300px),
  only screen and (        min-device-pixel-ratio: 2)      and (min-width: 1300px),
  only screen and (                min-resolution: 192dpi) and (min-width: 1300px),
  only screen and (                min-resolution: 2dppx)  and (min-width: 1300px) { 
  
    /* Large screen, retina, stuff to override above media query */
    body {
      ${fullScreenBg}
      background-image: url('${stats.webp[3].url}');
    } 
  }`
  return styles;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args)
    debugger;
  })

  eleventyConfig.setLibrary('md', markdownLib)

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addNunjucksAsyncShortcode("backgroundImage", responsiveBackgroundShortCode);
  eleventyConfig.addJavaScriptFunction("backgroundImage", responsiveBackgroundShortCode);

  eleventyConfig.addPassthroughCopy("dev/img");
  eleventyConfig.addPassthroughCopy({ "src/root": "." });

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav"].indexOf(tag) === -1);
  }
  eleventyConfig.setDataDeepMerge(true);

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  eleventyConfig.addCollection("tagList", collection => {
    const tagsObject = {}
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => {
          if(typeof tagsObject[tag] === 'undefined') {
            tagsObject[tag] = 1
          } else {
            tagsObject[tag] += 1
          }
        });
    });

    const tagList = []
    Object.keys(tagsObject).forEach(tag => {
      tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
    })
    return tagList.sort((a, b) => b.tagCount - a.tagCount)

  });


  // Add a filter using the Config API
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.setBrowserSyncConfig({
    reloadDelay: 400
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy-LL-dd');
  });
  return {
    dir: {
      input: "src",
      output: "dev"
    }
  };

};
