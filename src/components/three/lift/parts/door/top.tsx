import { FC, useMemo } from 'react';

import { useEliteConfigContext } from '@/context/elite-config.context';

interface ILiftTopDoorModalProps {}

const LiftTopDoorModal: FC<ILiftTopDoorModalProps> = (props) => {
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
    <group position={[0.002, 4.905, -0.711]}>
      <group position={[0.091, -0.064, -0.028]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.985}>
        <mesh castShadow receiveShadow geometry={nodes.Plane009.geometry} material={doorMaterial} />
        <mesh castShadow receiveShadow geometry={nodes.Plane009_1.geometry} material={materials.Glass} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Pin002.geometry}
          material={doorMaterial}
          position={[0, 0, -0.228]}
        />
      </group>
      <group position={[-0.355, -0.064, 0.02]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.985}>
        <mesh castShadow receiveShadow geometry={nodes.Plane013.geometry} material={doorMaterial} />
        <mesh castShadow receiveShadow geometry={nodes.Plane013_1.geometry} material={materials.Glass} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_frame002.geometry}
        material={doorMaterial}
        position={[-0.205, 0.057, 0.098]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.985}
      >
        <group
          position={[0.063, 0.195, -0.432]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.929, 0.704, 0.812]}
        >
          <mesh castShadow receiveShadow geometry={nodes.Cube040.geometry} material={materials['Display.001']} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials['Stainless Steel.002']}
          />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Guiderails004.geometry}
        material={doorMaterial}
        position={[0.019, -1.033, -0.009]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mechanism_Door002.geometry}
        material={doorMaterial}
        position={[0.621, 0.012, -0.096]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.985, 0.985, 0.998]}
      />
    </group>
  );
};

export default LiftTopDoorModal;
