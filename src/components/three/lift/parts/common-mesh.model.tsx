import { useEliteConfigContext } from '@/context/elite-config.context';
import { FC } from 'react';

interface ILiftDoorShaftModalProps {}

const LiftDoorShaftModal: FC<ILiftDoorShaftModalProps> = (props) => {
  const {} = props;
  const { nodes, materials } = useEliteConfigContext();
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loose_glass_Side_A001.geometry}
        material={materials.Glass}
        position={[0, 4.946, 0.784]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loose_glass_Side_B.geometry}
        material={materials.Glass}
        position={[-0.754, 4.946, -0.017]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loose_glass_side_B.geometry}
        material={materials.Glass}
        position={[0.006, 3.187, -0.002]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loose_glass_side_C.geometry}
        material={materials.Glass}
        position={[0.016, 1.123, 0.784]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.985}
      />
    </>
  );
};

export default LiftDoorShaftModal;
