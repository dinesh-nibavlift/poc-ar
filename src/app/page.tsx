"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

export default function ARScene() {
  const { scene } = useGLTF("/lift-modal.glb");
  useEffect(() => {
    if (scene) {
      const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.xr.enabled = true;
      document.body.appendChild(ARButton.createButton(renderer));

      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    }
  }, [scene]);

  return <div />;
}
