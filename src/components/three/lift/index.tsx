"use client";

import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import dynamic from "next/dynamic";
import {
  Center,
  Environment,
  OrbitControls,
  useProgress,
} from "@react-three/drei";

import { useEliteConfigContext } from "@/context/elite-config.context";
import { CAMERA_ANGLES } from "@/utils/constant/configurator";
import useSetState from "@/hooks/useSetState";
import { XR } from "@react-three/xr";

const Lift = dynamic(() => import("./modal"), { ssr: false });

const LiftView = (props: any) => {
  const { config, vrStore } = useEliteConfigContext();

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Environment
        files={
          config.application === "indoor"
            ? "/elite-config/application/indoor.exr"
            : "/elite-config/application/outdoor.exr"
        }
      />
      <OrbitControls enableZoom={false} />
      <XR store={vrStore}>
        <Lift material={props?.material} />
      </XR>
    </>
  );
};

export default LiftView;

export const ModalWrapper = () => {
  const { config } = useEliteConfigContext();

  const [state, setState] = useSetState({
    isLoading: true,
  });

  const { progress } = useProgress();
  useEffect(() => {
    if (progress === 100) {
      setState({ isLoading: false });
    }
  }, [progress]);

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">
        <Canvas>
          {config.cameraAngles === CAMERA_ANGLES.OUTER ? (
            <CameraController position={[-6.5, 0, 0]} />
          ) : (
            <CameraController position={[0, 0, 0.1]} near={0.1} far={1000} />
          )}
          <LiftView />
        </Canvas>
      </div>
    </div>
  );
};

function CameraController({
  position,
  near,
  far,
}: {
  position: [number, number, number];
  near?: number;
  far?: number;
}) {
  const { camera } = useThree();

  useEffect(() => {
    if (position) {
      camera.position.set(...position);
    }

    if (near) {
      camera.near = near;
    }

    if (far) {
      camera.far = far;
    }

    camera.lookAt(0, 0, 0);
  }, [position, camera, near, far]);

  return null;
}
