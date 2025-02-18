"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function ARScene() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();

    loader.load(
      "https://d1rxplgyivqd46.cloudfront.net/images/3js/lift-modal.glb",
      function (gltf) {
        scene.add(gltf.scene);
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

        const light = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(light);

        renderer.setAnimationLoop(() => {
          renderer.render(scene, camera);
        });
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);

  return <div />;
}
