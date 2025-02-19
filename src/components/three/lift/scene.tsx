import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { FC, ReactNode } from 'react';
import { PerspectiveCamera } from 'three';

interface ILiftSceneProps {
  children: ReactNode;
}

export const Control = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  return <OrbitControls args={[camera, domElement]} />;
};

export const CameraHelper = () => {
  const camera = new PerspectiveCamera(60, 1, 1, 3) as any;
  return <cameraHelper args={[camera]} />;
};

const LiftScene: FC<ILiftSceneProps> = (props) => {
  const { children } = props;

  return (
    <group position-y={-0.5}>
      {children}
      {/* <Control />
      <CameraHelper /> */}
    </group>
  );
};

export default LiftScene;
