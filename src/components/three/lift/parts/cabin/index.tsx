import { FC, useMemo } from "react";

import { useEliteConfigContext } from "@/context/elite-config.context";
import { getConfigMaterial } from "@/utils/functions/elite-config";

interface ILiftCabinModalProps {}

const LiftCabinModal: FC<ILiftCabinModalProps> = (props) => {
  const {} = props;

  const { config, nodes, materials, textures } = useEliteConfigContext();

  const cabinAccentMaterial = useMemo(() => {
    if (textures && config.cabinAccent && textures?.[config.cabinAccent]) {
      return textures?.[config.cabinAccent];
    }
  }, [config.cabinAccent, textures]);

  const sideGCabinMaterial = useMemo(() => {
    const cabinSides = config.cabinSides || [];
    const sideGValues = cabinSides.find(
      (cabinWall) => cabinWall.side === "side-g"
    );

    const newMaterial = getConfigMaterial(
      sideGValues?.cabinWall,
      textures,
      materials
    );
    return newMaterial;
  }, [config.cabinSides, materials]);

  return (
    <group position={[-0.134, 0.108, 0.061]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={cabinAccentMaterial}
        position={[0.523, 1.009, -0.047]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["2"].geometry}
        material={cabinAccentMaterial}
        position={[0.523, 1.06, -0.047]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Alarm.geometry}
        material={materials.Alarm}
        position={[0.523, 1.112, -0.048]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <group
        position={[0, 0, -0.05]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      >
        <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["EP-2-Elite_cabin_assy_ref002"].geometry}
            material={cabinAccentMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["EP-2-Elite_cabin_assy_ref002_1"].geometry}
            material={sideGCabinMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["EP-2-Elite_cabin_assy_ref002_2"].geometry}
            material={materials["Logo emission"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["3d-model"].geometry}
            material={materials["Metal.001"]}
            position={[-0.001, -0.531, -0.797]}
            rotation={[0, 0, -Math.PI]}
            scale={-0.003}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cabin_bevel.geometry}
            material={cabinAccentMaterial}
            position={[0.65, -0.499, -1.06]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cabin008.geometry}
            material={sideGCabinMaterial}
            position={[0, -0.005, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.False_ceiling.geometry}
            material={cabinAccentMaterial}
            position={[0, 0.001, -2.007]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor_C.geometry}
            material={cabinAccentMaterial}
            position={[0, 0.021, 0.003]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_side_cover_C.geometry}
            material={cabinAccentMaterial}
            position={[-0.07, -0.561, -1.07]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Side_A.geometry}
            material={materials["Cabin interior"]}
            position={[0.712, -0.011, -1.011]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Side_B.geometry}
            material={materials["Cabin interior"]}
            position={[-0.007, 0.567, -1.013]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-0.214, 0.971, 0.589]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078.geometry}
            material={cabinAccentMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078_1.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door_Pin008.geometry}
            material={cabinAccentMaterial}
            position={[0, 0, -0.228]}
          />
        </group>
        <group
          position={[0.238, 0.971, 0.638]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane081.geometry}
            material={cabinAccentMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane081_1.geometry}
            material={materials.Glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_frame008.geometry}
          material={cabinAccentMaterial}
          position={[0.086, 1.067, 0.534]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
      </group>
      <group
        position={[0.523, 1.281, -0.047]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.Display}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_1.geometry}
          material={materials["Plastic.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EP_lift_Ceiling_frame_cabin.geometry}
        material={cabinAccentMaterial}
        position={[-0.001, 1.954, -0.05]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.985}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["Emission light.002"]}
          position={[-0.642, 0, -0.012]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-0.425, -0.002, -0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Emission light.002"]}
          position={[0.642, 0, -0.012]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-0.418, -0.002, -0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Emission light.002"]}
          position={[0.003, 0.492, -0.012]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-0.578, -0.002, -0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials["Emission light.002"]}
          position={[0.003, -0.493, -0.012]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-0.572, -0.002, -0.009]}
        />
        <group position={[0, 0, -0.006]} scale={[1.094, 0.849, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["EP-2-Elite_cabin_assy_ref005"].geometry}
            material={materials["Emission light.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["EP-2-Elite_cabin_assy_ref005_1"].geometry}
            material={materials["Second colour.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top.geometry}
          material={cabinAccentMaterial}
          position={[0, -0.001, -0.173]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.G001.geometry}
        material={materials.G}
        position={[0.523, 0.96, -0.047]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Open.geometry}
        material={materials.Key}
        position={[0.523, 0.912, -0.047]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Open001.geometry}
        material={materials.Open}
        position={[0.523, 0.86, -0.046]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.985}
      />
    </group>
  );
};

export default LiftCabinModal;
