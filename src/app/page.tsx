"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

export default function ARScene() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.xr.enabled = true;
    document.body.appendChild(ARButton.createButton(renderer));

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }, []);

  return <div />;
}
