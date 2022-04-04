---
title: Two Chunks One Sphere
summary: A single SDF sphere moves between two chunks that generate a mesh.
tags: ["Chunks","Signed Distance Fields"]
---

This demo shows single sphere defined by a signed distance field that is slowly moving backwards and forwards between two 'chunks'. The chucks create a mesh for any SDF within their bounding area. The two chunks are setup to produce meshes of different resolution. In large environments chunks in the distance will be of a lower level of detail (LOD) that chunks close to the viewer. However gaps can be seen between the two chunks, seams need to be created between the chunks that take account of the differing resolutions.