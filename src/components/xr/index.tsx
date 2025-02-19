"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";

const store = createXRStore();

function Model() {
  const { scene } = useGLTF("/lift-modal.glb");
  return <primitive object={scene} scale={1} />;
}

export default function ARScene() {
  return (
    <div className="mt-[50vh]">
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <ambientLight intensity={100} />
        <pointLight position={[2, 2, 2]} />
        <Environment files="/indoor.exr" />
        <XR store={store}>
          <Model />
        </XR>
      </Canvas>
    </div>
  );
}
