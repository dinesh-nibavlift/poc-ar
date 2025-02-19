import { FC, useMemo } from 'react';

import { useEliteConfigContext } from '@/context/elite-config.context';
import { getConfigMaterial } from '@/utils/functions/elite-config';

interface ILiftHorizontalShaftProps {}

const LiftHorizontalShaft: FC<ILiftHorizontalShaftProps> = (props) => {
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
        geometry={nodes.Shaft_Frame003.geometry}
        material={doorMaterial}
        position={[0, -1.368, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.04, 0.064, 0.064]}
      />
    </>
  );
};

export default LiftHorizontalShaft;
