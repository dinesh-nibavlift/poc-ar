import React from 'react';
import { useGLTF } from '@react-three/drei';

export function X300Model(props: any) {
  const { nodes, materials } = useGLTF('/X300_Materials.glb') as any;
  console.log({ nodes, materials });
  return (
    <group {...props} dispose={null}>
      <group position={[-0.134, 0.108, 0.011]} rotation={[Math.PI, 0, Math.PI]} scale={0.985}>
        <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['EP-2-Elite_cabin_assy_ref002'].geometry}
            material={materials['Cabin Accent-Ashen grey']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['EP-2-Elite_cabin_assy_ref002_1'].geometry}
            material={materials['Logo emission']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['3d-model'].geometry}
            material={materials['Metal Bar']}
            position={[-0.001, -0.531, -0.797]}
            rotation={[0, 0, -Math.PI]}
            scale={-0.003}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cabin_bevel.geometry}
            material={materials['Cabin Accent-Ashen grey']}
            position={[0.65, -0.499, -1.06]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cabin008.geometry}
            material={materials['Gside Mirror']}
            position={[0, -0.005, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.False_ceiling.geometry}
            material={materials['Cabin Accent-Ashen grey']}
            position={[0, 0.001, -2.007]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_C.geometry}
            material={materials['Cabin Accent-Ashen grey']}
            position={[0, 0.021, 0.003]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_side_cover_C.geometry}
            material={materials['Cabin Accent-Ashen grey']}
            position={[-0.07, -0.561, -1.07]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials['ABC Glass']}
            position={[-0.007, 0.567, -1.013]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials['ABC Glass']}
            position={[0.712, -0.011, -1.011]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </group>
        <group position={[-0.214, 0.971, 0.638]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078.geometry}
            material={materials['Cabin Door_Ashen grey']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078_1.geometry}
            material={materials['Cabin door Glass']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door_Pin008.geometry}
            material={materials['Cabin Door_Ashen grey']}
            position={[0, 0, -0.228]}
          />
        </group>
        <group position={[0.238, 0.971, 0.688]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane081.geometry}
            material={materials['Cabin Door_Ashen grey']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane081_1.geometry}
            material={materials['Cabin door Glass']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_frame008.geometry}
          material={materials['Cabin Door_Ashen grey']}
          position={[0.086, 1.067, 0.583]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vinyl_C.geometry}
          material={materials['Beige Vinyl carpet']}
          position={[0.006, -0.001, 0.059]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={1.016}
        />
      </group>
      <group position={[-0.135, 2.081, 0.011]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Elite_Top.geometry}
          material={materials['Cabin Accent-Ashen grey']}
          position={[-0.001, 0.152, 0]}
          scale={[0.982, 1, 0.982]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EP_lift_Ceiling_frame_cabin001.geometry}
          material={materials['Cabin Accent-Ashen grey']}
          position={[0, -0.02, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.996, 0.996, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Square_Light002.geometry}
          material={materials['Emission light.001']}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.28, 0.993, 1]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Open.geometry}
        material={materials.Overload}
        position={[0.388, 1.021, 0.014]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.G001.geometry}
        material={materials.G}
        position={[0.388, 1.068, 0.014]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2'].geometry}
        material={materials['2']}
        position={[0.388, 1.168, 0.014]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1'].geometry}
        material={materials['1']}
        position={[0.388, 1.117, 0.014]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Alarm.geometry}
        material={materials.Alarm}
        position={[0.388, 1.221, 0.013]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <group position={[0.389, 1.389, 0.014]} rotation={[Math.PI, 0, Math.PI]} scale={0.985}>
        <mesh castShadow receiveShadow geometry={nodes.Cube032.geometry} material={materials.Display} />
        <mesh castShadow receiveShadow geometry={nodes.Cube032_1.geometry} material={materials['Display edge']} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Open001.geometry}
        material={materials.Open}
        position={[0.388, 0.968, 0.014]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
    </group>
  );
}
