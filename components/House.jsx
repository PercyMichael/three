/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./house.glb --transform
Author: sh1zond (https://sketchfab.com/sh1zond)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/house-cc68b084e0d24098abc68e350570a268
Title: House
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House(props) {
  const { nodes, materials } = useGLTF("/models/house/house-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.04}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.14, 0.15, 1.35]} scale={[0.07, 0.07, 0.14]}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Box2}
            />
          </group>
          <group position={[0.11, 0.31, -0.87]} scale={[0.85, 0.57, 0.85]}>
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.House}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.House2}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.Glass}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials["Wood.001"]}
            />
          </group>
          <group position={[0.11, 0.31, -0.87]} scale={[0.85, 0.57, 0.85]}>
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.Roof}
            />
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials.RoofWood}
            />
          </group>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Road}
            position={[-0.01, -0.34, -0.07]}
            scale={1.69}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Grass}
            position={[-0.01, -0.25, -0.07]}
            scale={[1.68, 1.69, 1.68]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Wood}
            position={[1.14, -0.09, 1.35]}
            scale={[0.02, 0.17, 0.02]}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.Flag}
            position={[1.06, 0.2, 1.41]}
            scale={[0.01, 0.06, 0.01]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Wood}
            position={[0.23, 0.32, -0.04]}
            scale={[0.04, 0.22, 0.08]}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.Wood}
            position={[-0.95, 1.52, -0.81]}
            scale={[0.02, 0.06, 0.02]}
          />
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials["Roof.Brick"]}
            position={[0.92, 1.49, -0.75]}
            rotation={[0.08, 0, 0]}
            scale={[1.35, 0.57, 0.85]}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials.House}
            position={[-1.47, 1.07, -0.84]}
            scale={[0.15, 0.49, 0.33]}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials.ChimneyBrick}
            position={[-1.54, 0.51, -0.74]}
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={[-0.02, 0.04, 0.09]}
          />
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials.Hand}
            position={[0.39, 0.1, -0.09]}
            scale={0.03}
          />
          <mesh
            geometry={nodes.Object_35.geometry}
            material={materials.Grass}
            position={[1.3, -0.07, 0.16]}
            rotation={[2.42, 0.7, 2.78]}
            scale={0.32}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials.Grass}
            position={[-0.82, -0.07, 0.39]}
            rotation={[0.36, -1.01, 2.01]}
            scale={0.32}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials.Grass}
            position={[-0.82, -0.07, 1.17]}
            rotation={[-0.81, 0.56, 0.02]}
            scale={0.32}
          />
          <mesh
            geometry={nodes.Object_41.geometry}
            material={materials.Leaves}
            position={[-1.44, -0.09, 1.36]}
            rotation={[Math.PI / 2, 0, -0.32]}
            scale={[0.01, 0.08, 0.08]}
          />
          <mesh
            geometry={nodes.Object_43.geometry}
            material={materials.Leaves}
            position={[-1.52, -0.09, 0.21]}
            rotation={[Math.PI / 2, 0, -0.26]}
            scale={[0.01, 0.08, 0.08]}
          />
          <mesh
            geometry={nodes.Object_45.geometry}
            material={materials.Leaves}
            position={[1.42, -0.06, -0.91]}
            rotation={[Math.PI / 2, 0, -0.38]}
            scale={[0.01, 0.08, 0.08]}
          />
          <mesh
            geometry={nodes.Object_47.geometry}
            material={materials.Leaves}
            position={[-1.29, -0.17, 0.84]}
            rotation={[1.39, -0.11, 0.23]}
            scale={[0.01, 0.09, 0.09]}
          />
          <mesh
            geometry={nodes.Object_49.geometry}
            material={materials.Leaves}
            position={[0.97, -0.17, 0.22]}
            rotation={[1.39, -0.11, 0.23]}
            scale={[0.01, 0.09, 0.09]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/house/house-transformed.glb");