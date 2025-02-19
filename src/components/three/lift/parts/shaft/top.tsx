import { FC, useMemo } from 'react';

import { useEliteConfigContext } from '@/context/elite-config.context';
import { getConfigMaterial } from '@/utils/functions/elite-config';

interface ILiftTopShaftProps {}

const LiftTopShaft: FC<ILiftTopShaftProps> = (props) => {
  const {} = props;

  const { config, nodes, materials, textures } = useEliteConfigContext();

  const doorMaterial = useMemo(() => {
    const newMaterial = getConfigMaterial(config.shaft, textures, materials);
    return newMaterial;
  }, [config.shaft, textures, materials]);

  return (
    <>
      <group position={[0.072, -3.26, 0.083]} rotation={[0, 1.571, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube035.geometry} material={doorMaterial} />
        <mesh castShadow receiveShadow geometry={nodes.Cube035_1.geometry} material={materials.Glass} />
      </group>
    </>
  );
};

export default LiftTopShaft;
