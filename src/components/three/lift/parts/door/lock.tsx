import { FC, useMemo } from "react";

import { useEliteConfigContext } from "@/context/elite-config.context";

interface ILiftCabinLockProps {
  nodes: any;
  materials: any;
}

const LiftCabinLock: FC<ILiftCabinLockProps> = (props) => {
  const { config, nodes, materials, textures } = useEliteConfigContext();

  const doorMaterial = useMemo(() => {
    if (
      textures &&
      config.landingDoorColor &&
      textures?.[config.landingDoorColor]
    ) {
      return textures?.[config.landingDoorColor];
    }
  }, [config.landingDoorColor]);

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_frame.geometry}
        material={doorMaterial}
        position={[0, 0, 0.001]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      >
        <group
          position={[0.133, 0.195, -0.429]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.929, 0.704, 0.812]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036.geometry}
            material={materials["Display.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials["Stainless Steel.002"]}
          />
        </group>
      </mesh>
    </>
  );
};

export default LiftCabinLock;
