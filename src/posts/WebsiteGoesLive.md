---
title: Spimeverse website goes live
date: 2022-03-28
summary: Building a simple website took more effort than anticipated
tags: ["News","website"]
backgroundurl: ./src/img/shubham-dhage-nOkWMjfMhnc-unsplash.jpg
backgroundcredit: background by&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a>&nbsp;on&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---
I took a little break from building Spimeverse itself to put together a really '*simple*' website, perhaps with a little mailing list that could be a place to promote the project and let people know how things were going on.

I wanted to use a static site generator so it would be fast and not have any hard dependencies on particular web hosting platforms and could grow along with the project.

After a few false starts fighting with other alternatives.  I eventually settled on [11ty](https://www.11ty.dev/). It's a great SSG that doesn't depend on React, Angular or other components. Just a templating language some markdown and a little bit of jscript logic.

> ## Just a simple website and mailing list. what could go wrong?

{% image "https://media.giphy.com/media/k2l3KtdzFUONG/giphy.gif", "Wrestling with the problem", "", "Photo by gify.com" %}


Well sorta! I've made plenty of websites, in all sort of technologies and so I expected this to a walk in the park. But getting the setup right to generate responsive images, learning exactly how data cascaded data, setting up forms to post to netlify, then realizing I could setup the mailing list directly on [buttondown](https://buttondown.email/) and keep costs down. Wrestling with Dns settings to mail from the Spimeverse domain which I accidentally tried to wire up to Spime**Space** which of course didn't work🤦‍♂️.

# The bottom line 
Even with well documented and well designed tools. There's still a learning curve to get to achieve what you want. There's always a cost in time and effort for every new technology you add to your toolbelt. Don't ever expect a free lunch! 🍕

But the effort is worth it the [Spimeverse.com](https://Spimeverse.com)** website is live and you can now subscribe to this newsletter to keep up with how things are going now I've stopped messing around with the website!

** Actually the original domain name used by the project was **SpimeScape** but this changed to Spimeverse.com in August 2023