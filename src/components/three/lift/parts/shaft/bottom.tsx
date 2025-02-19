import { FC, useMemo } from 'react';

import { useEliteConfigContext } from '@/context/elite-config.context';
import { getConfigMaterial } from '@/utils/functions/elite-config';

interface ILiftBottomShaftModalProps {}

const LiftBottomShaftModal: FC<ILiftBottomShaftModalProps> = (props) => {
  const {} = props;

  const { config, nodes, materials, textures } = useEliteConfigContext();

  const doorMaterial = useMemo(() => {
    const newMaterial = getConfigMaterial(config.shaft, textures, materials);
    return newMaterial;
  }, [config.shaft, textures, materials]);

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.False_ceiling001.geometry}
      material={doorMaterial}
      position={[0.215, -6.418, 0.02]}
      scale={[0.995, 1, 1]}
    />
  );
};

export default LiftBottomShaftModal;
