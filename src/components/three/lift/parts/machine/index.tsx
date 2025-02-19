import { useEliteConfigContext } from '@/context/elite-config.context';
import { FC } from 'react';

interface ILiftMachineModalProps {}

const LiftMachineModal: FC<ILiftMachineModalProps> = (props) => {
  const {} = props;
  const { nodes, materials } = useEliteConfigContext();
  return (
    <group position={[-0.02, 3.172, 0.084]} rotation={[Math.PI, 0, Math.PI]} scale={[1.567, 2.744, 1.567]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E200_SIDE_TRAILS001.geometry}
        material={materials['black-metal.002']}
        position={[-0.407, -0.079, 0.038]}
        rotation={[0, -1.571, 0]}
        scale={[0.624, 0.356, 0.624]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['black-metal.002']}
          position={[0.2, 2.136, -0.081]}
          rotation={[0, 1.571, 0]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['black-metal.002']}
          position={[0.242, 2.136, -0.081]}
          rotation={[0, 1.571, 0]}
          scale={0.004}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E200_SUPPORT_TRAILS_G0003.geometry}
        material={materials['black-metal.002']}
        position={[-0.422, -0.355, 0.032]}
        rotation={[0, -1.571, 0]}
        scale={[0.624, 0.356, 0.624]}
      />
      <group position={[-0.501, 0.628, 0.37]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.043, -0.243, -0.674]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly001.geometry}
          material={materials['black-metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly001_1.geometry}
          material={materials['Black matte.002']}
        />
      </group>
      <group position={[-0.501, 0.243, 0.37]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.043, -0.243, -0.674]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly008.geometry}
          material={materials['black-metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly008_1.geometry}
          material={materials['Black matte.002']}
        />
      </group>
      <group position={[-0.501, -0.058, 0.37]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.043, -0.243, -0.674]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly009.geometry}
          material={materials['black-metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly009_1.geometry}
          material={materials['Black matte.002']}
        />
      </group>
      <group position={[-0.501, -0.349, 0.37]} rotation={[-Math.PI, 1.571, 0]} scale={[-0.043, -0.243, -0.674]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly010.geometry}
          material={materials['black-metal.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trails_structure_assembly010_1.geometry}
          material={materials['Black matte.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.H300_BELTS_WEIGHTS.geometry}
        material={materials['black-metal.002']}
        position={[-0.434, 0.118, 0.039]}
        rotation={[0, 1.571, 0]}
        scale={[0.624, 0.356, 0.624]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.H300_BELTS_WEIGHTS001.geometry}
        material={materials['black-metal.002']}
        position={[-0.277, 0.118, 0.039]}
        rotation={[0, 1.571, 0]}
        scale={[0.624, 0.356, 0.624]}
      />
      <mesh
        name="H300_FORKS"
        castShadow
        receiveShadow
        geometry={nodes.H300_FORKS.geometry}
        material={materials['black-metal.002']}
        morphTargetDictionary={nodes.H300_FORKS.morphTargetDictionary}
        morphTargetInfluences={nodes.H300_FORKS.morphTargetInfluences}
        position={[-0.486, -1.127, 0.038]}
        rotation={[0, 1.571, 0]}
        scale={[0.65, 0.371, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.H300_MOTOR.geometry}
        material={materials['black-metal.002']}
        position={[-0.365, 0.995, -0.006]}
        rotation={[0, 1.571, 0]}
        scale={[0.624, 0.356, 0.624]}
      />
      <mesh
        name="H300_WEIGHTS"
        castShadow
        receiveShadow
        geometry={nodes.H300_WEIGHTS.geometry}
        material={materials['black-metal.002']}
        morphTargetDictionary={nodes.H300_WEIGHTS.morphTargetDictionary}
        morphTargetInfluences={nodes.H300_WEIGHTS.morphTargetInfluences}
        position={[-0.399, 0.697, 0.038]}
        rotation={[0, 1.571, 0]}
        scale={[0.645, 0.368, 0.645]}
      />
    </group>
  );
};

export default LiftMachineModal;
