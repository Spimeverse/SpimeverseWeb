---
title: Seamless Chunks at different resolutions
summary: Seamlessly transition between chunks of different resolution
tags: ["Chunks","Seams"]
---

This demo shows an SDF box moving between two chunks of different resolution. The chunks are rendered as different colours and have one is twice the resolution of the other. When the box crosses between the chunks, the higher resolution has to adjust it's output to match up with the lower resolution neighbour. This avoid any gaps where the two chunks meet. This technique will be extended to the whole terrain so that more distant objects get progressively less detailed. This will allow large environments to be rendered.