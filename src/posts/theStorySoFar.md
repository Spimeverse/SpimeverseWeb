---
title: Dev journal - the story so far...
date: 2022-03-29
summary: First steps. Laying the foundation for a world built from signed distance fields.
tags: ["Dev journal","Signed Distance Fields"]
backgroundurl: https://unsplash.com/photos/kkHazzbrpCs/download?force=true
backgroundcredit: background by&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a>&nbsp;on&nbsp;<a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

I've been working on one of the core elements of SpimeScape for a little while now. Namely converting signed distance fields (SDF's) into meshes. SDF's deserve a post all to themselves, but briefly they allow us to define shapes as solid volumes and easily combine them together to build more complex shapes, they're also great for detecting collisions, level of detail, calculating shadows and visibility... like I said, a post in their own right. For all these reasons the plan is to use SDF's for all objects and terrain in SpimeScape.

SDF's define objects such as cubes and spheres as equations, and we need a way to turn those equations into pixels. This can be performed in shaders pixel by pixel to amazing effect in [examples such as this](https://www.shadertoy.com/view/Xds3zN){target="_blank" rel="noopener"} by [Inigo Quilez](https://www.iquilezles.org/){target="_blank" rel="noopener"} however doing this at VR framerates is not really practical right now.

Instead we need to turn our SDF's into a traditional mesh of triangles which most graphics hardware is much more capable of displaying at speed. This is not a new problem, various algorithms to do this have been around for a very long time. [Marching cubes](https://en.wikipedia.org/wiki/Marching_cubes){target="_blank" rel="noopener"} dates back to 1987...

{% image "https://upload.wikimedia.org/wikipedia/commons/6/63/Marchingcubes-head.png", "Wrestling with the problem", "", "http://commons.wikimedia.org/wiki/File:Marchingcubes-head.png" %}

Marching cubes is complex to implement and can produce more triangles than other techniques. Initially we'll use a much simpler *Naive Surface Nets*, explained and compared to the other meshing algorithms [here](https://0fps.net/2012/07/12/smooth-voxel-terrain-part-2/){target="_blank" rel="noopener"} by mikolalysenko. If some of the details makes your head explode 🤯 you're not alone. I discovered Naive surface nets and the jscript implementation from the post above, but Mikolalysenko code was a little too dense for me to unpack.

In the end it was [this Rust implementation](https://github.com/amethyst/voxel-mapper){target="_blank" rel="noopener"} which also references Mikolalysenko but was much more straightforward. Using this as a starting point allowed me to really understand the details and create a Typescript implementation that was similarly easy to follow. Quite a journey already! 😅

So we've now got an SDF sphere being rendered in two chunks with different resolutions. Terrain or objects that are father away will be rendered by lower resolutions chunks to improve performance. The next challenge is to fix the seams between chunks of different levels of details. In the example below you can see the gap between the chunks where the seam needs to be.

![Two chunks one Sphere](/img/2022-03-30%20Two%20chunks%20one%20sphere.webp "Two chunks one Sphere")

So that's the next challenge! More next time.