---
title: Enter the Metaverse
date: 2022-01-01
summary: I have a dream of building an open technology that anyone can use to build virtual worlds. Worlds they can create and share as easily as creating a web page.
tags: ["Articles","IPFS","Babylonjs","Signed Distance Fields","Spimes"]
backgroundurl: ./src/img/shubham-dhage-nOkWMjfMhnc-unsplash.jpg
backgroundcredit: background by&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a>&nbsp;on&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

{% image "./src/img/digital_rain.png", "digital rain", "(max-width: 600px) 300px, 600px" %}

Now Facebook has become Meta the Metaverse is very much in vogue. But writers, filmmakers and artists have dreamed of virtual worlds for decades. [Tron](https://www.imdb.com/title/tt0084827/){target="_blank" rel="noopener"}, [the Matrix](https://www.imdb.com/title/tt0133093/?ref_=fn_al_tt_1){target="_blank" rel="noopener"}, William Gibson’s [Cyberspace](https://en.wikipedia.org/wiki/Burning_Chrome){target="_blank" rel="noopener"}, Neal Stephenson’s [Metaverse](https://en.wikipedia.org/wiki/Snow_Crash){target="_blank" rel="noopener"} and Hannu_Rajaniemi’s [SpimeScape](https://www.karangill.com/glossary-quantum-thief-fractal-prince-jean-le-flambeur/#Spimescape){target="_blank" rel="noopener"} to name but a few. These artists have given us a glimpse of digital worlds that are now becoming possible to create.

The pioneers of the internet and the web have already given us an online world we work and play in. Many of the current “Metaverse’s” 🤨 don’t build on these open foundations. It’s difficult to see how these platforms can become ubiquitous in the same way the web has. Some approaches are too limited to ever realise the worlds we’ve imagined.

So what features would the ideal open digital universe look like?

## A Better Meta

> * *🌐 Ubiquitous* — it should work on a wide range of platforms. It should be usable on everything from phones to room-scale VR and AR. Like the web, it should ‘progressively enhance’ experiences on more capable systems.
> 
> * *🔓 Open* — anyone should be able to download the source and run their own world on their laptop or host it on any server they wish. Just like you can create a website and host it yourself.
> 
> * *🗺 Decentralised* — Users data and identity should be served from one or many hosts. Their identity, worlds, and virtual possessions shouldn’t change when they move server.
> 
> * *👩‍🎨 Creative* — Creating worlds, objects and avatars should be simple and fun. Making or changing the environment should literally be childs play. Creators should be able to share or sell their creations.
> 
> * *💰 Inexpensive* — In an infinite virtual world, charging for “land” is plain crazy. Hosting virtual worlds should be no more expensive than hosting web pages. Transaction charges for services or virtual items should be low or free. Users should be able to buy items for a few cents. Creators should be able sell their work and have it enjoyed by thousands not just a privileged few.
> 
> * *💫 Persistent* — Changes to the world or objects should persist across space an time as [Spimes](https://en.wikipedia.org/wiki/Spime){target="_blank" rel="noopener"} not just immutable NFT’s

## Building Worlds Better

{% image "src/img/nasa-Q1p7bh3SHj8-unsplash.jpg", "Earth from space", "(max-width: 600px) 300px, 600px", "Photo by NASA on Unsplash" %}

How would such a thing get built? Well, I’m a greybeard developer of many decades🧙‍♂️. I’ve watched the tools and technologies of the web just get better and better.

Browsers are capable of rendering in 3D leveraging the power of graphics cards. They can exchange data peer to peer without going via a server using [WebRTC](https://webrtc.org/){target="_blank" rel="noopener"}. JScript code execution is very fast with engines like [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)){target="_blank" rel="noopener"}. If necessary browsers can execute [web assembly](https://webassembly.org/){target="_blank" rel="noopener"} for near native speed and efficiency.

These really capable Browsers are already installed on headsets like Meta Quest. So jumping into a new VR world is possible just from a web link.

There are amazing libraries to harness the power of the browser. Such as graphics engine, [Babylonjs](https://www.babylonjs.com/){target="_blank" rel="noopener"}, which is simple to use, yet incredibly powerful. Babylonjs will soon support [WebGPU](https://www.youtube.com/watch?v=A2FxeEl4nWw){target="_blank" rel="noopener"} the successor to WebGL2 for even greater performance. Decentralised data storage is possible via [IPFS](https://ipfs.io/){target="_blank" rel="noopener"}. Realtime peer to peer data exchanged between clients with [Libp2p](https://libp2p.io/){target="_blank" rel="noopener"}.

The browser wouldn’t be the only client however. Babylonjs also supports a [native client](https://www.babylonjs.com/native/){target="_blank" rel="noopener"}. That would allow the creation of native desktops and mobile clients using most of the same code.

Then there are techniques yet to be fully exploited in virtual worlds and games. Modelling techniques like [signed distance fields](https://www.shadertoy.com/view/WsSBzh){target="_blank" rel="noopener"} are easier to use than polygons. Approaches to physics like position based dynamics that are fast and accurate.

# Conclusion

Today is 01/01/2022, this is the start of the journey, and success is far from certain. There is MUCH to be done, but the barriers to doing something amazing have never been lower.

Follow Spimeverse and see where it leads.
