import { FC, useMemo } from 'react';

import { useEliteConfigContext } from '@/context/elite-config.context';
import { getConfigMaterial } from '@/utils/functions/elite-config';

interface ILiftVerticalShaftProps {}

const LiftVerticalShaft: FC<ILiftVerticalShaftProps> = (props) => {
  const {} = props;

  const { config, nodes, materials, textures } = useEliteConfigContext();

  const doorMaterial = useMemo(() => {
    const newMaterial = getConfigMaterial(config.shaft, textures, materials);
    return newMaterial;
  }, [config.shaft, textures, materials]);

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shaft001.geometry}
        material={doorMaterial}
        position={[-0.027, 2.995, -0.006]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shaft002.geometry}
        material={doorMaterial}
        position={[0.002, 4.895, 0.785]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shaft005.geometry}
        material={doorMaterial}
        position={[-0.751, 4.895, -0.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shaft007.geometry}
        material={doorMaterial}
        position={[-0.748, 1.1, -0.001]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shaft008.geometry}
        material={doorMaterial}
        position={[0.002, 1.1, 0.785]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
    </>
  );
};

export default LiftVerticalShaft;
