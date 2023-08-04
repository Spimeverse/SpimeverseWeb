---
title: Terrain Development Update
date: 2023-08-04
summary: An update on progress after 12 months without posting. Terrain handling and chunking system implemented.
tags: ["Terrain", "Chunking","Signed Distance Fields"]
backgroundurl: ./src/img/Default_metaverse_landscape_hills_and_valleys_digital_computer_0_8cc0a455-b282-4849-a7bc-e4e70041e61a_1.jpg
---

It's been over 12 months since our last development update. Other commitments meant we haven't been able to post as regularly as we hoped. But exciting progress has continued behind the scenes on Spimeverse.

The biggest new feature we've implemented is a terrain handling and chunking system. This divides the world into chunks that can be managed separately. Far away chunks use low detail terrain meshes, while nearer chunks have higher detail. 

As the viewer moves through the world, far away low detail chunks are replaced by nearer higher detail chunks dynamically. This optimized scene rendering based on viewer location.

The chunking system is a major step forward for handling large open worlds. Our next focus is implementing multiple web workers to update terrain chunks in parallel. This will allow faster updates as the viewer moves through the world.

You can see a demonstration of the new chunking system in this video:

{% youtube "WRFKz2LQM0U" %}

The terrain in this video is a single signed distance field (SDF) which generates a complex fractal terrain that includes holes and overhangs not just a simple height map. Even more varied terrain will be possible by combining multiple SDFs together.

It's been a busy year of heads-down development on the core Spimeverse engine. We plan to start posting more regular updates again now that these big features are in place. There are still challenges ahead, but we're excited by the progress so far. More to come!