'use client';
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function TextureModel(props: any) {
  const { nodes, materials } = useGLTF('/untitled.glb') as any;
  console.log({ nodes, materials });
  return (
    <group>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  );
}
useGLTF.preload('/untitled.glb');
