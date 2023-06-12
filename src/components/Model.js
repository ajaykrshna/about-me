/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

/* import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Poimandres.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/Poimandres.gltf"); */



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

/* export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/suzanne.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.19, -0.04]}
      />
    </group>
  );
}

useGLTF.preload("/suzanne.gltf"); */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: CVRxEarth (https://sketchfab.com/CVRxEarth)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/miles-from-spider-man-across-the-spider-verse-6585b5cd701d4b11a66618e20b7c8df7
title: Miles from Spider-Man: Across The Spider Verse
*/

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/about-me/miles_from_spider-man_across_the_spider_verse.glb"
  );
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.1} position={[0, -10, 0]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.E_Y_E_S}
              skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_8.geometry}
              material={materials.M_A_S_K}
              skeleton={nodes.Object_8.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_7.geometry}
              material={materials.S_U_I_T}
              skeleton={nodes.Object_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/about-me/miles_from_spider-man_across_the_spider_verse.glb");

