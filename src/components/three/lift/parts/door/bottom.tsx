import { FC, useMemo } from "react";

import LiftCabinLock from "./lock";

import { useEliteConfigContext } from "@/context/elite-config.context";

interface ILiftBottomDoorModalProps {}

const LiftBottomDoorModal: FC<ILiftBottomDoorModalProps> = (props) => {
  const {} = props;
  const { config, nodes, materials, textures } = useEliteConfigContext();

  const doorMaterial = useMemo(() => {
    if (
      textures &&
      config.landingDoorColor &&
      textures?.[config.landingDoorColor]
    ) {
      return textures?.[config.landingDoorColor];
    }
  }, [config.landingDoorColor, textures]);

  return (
    <group
      position={[-0.219, 1.158, -0.613]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={0.985}
    >
      <group
        position={[-0.3, -0.095, 0.107]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037.geometry}
          material={doorMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane037_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Pin.geometry}
          material={doorMaterial}
          position={[0, 0, -0.228]}
        />
      </group>
      <group
        position={[0.152, -0.095, 0.059]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031.geometry}
          material={doorMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane031_1.geometry}
          material={materials.Glass}
        />
      </group>
      <LiftCabinLock nodes={nodes} materials={materials} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Guiderails.geometry}
        material={doorMaterial}
        position={[-0.244, -1.074, 0.088]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mechanism_Door.geometry}
        material={doorMaterial}
        position={[-0.849, -0.045, 0.196]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default LiftBottomDoorModal;
