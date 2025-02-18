"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

// Load Materials from GLB file
function useMaterials() {
  const { materials } = useGLTF("/materials.glb"); // Load materials
  return materials;
}

// Load Lift Model
function Lift({
  selectedPart,
  selectedMaterial,
}: {
  selectedPart: string;
  selectedMaterial: string;
}) {
  const { scene, nodes } = useGLTF("/lift-modal.glb"); // Load lift model

  const materials = useMaterials(); // Load materials

  useEffect(() => {
    if (nodes[selectedPart] && materials[selectedMaterial]) {
      (nodes[selectedPart] as Mesh).material = materials[selectedMaterial]; // Apply material to selected part
    }
  }, [selectedPart, selectedMaterial, nodes, materials]);

  useEffect(() => {
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
  }, [selectedPart, selectedMaterial, nodes, materials]);

  return <primitive object={scene} />;
}

export default function LiftConfigurator() {
  const { nodes } = useGLTF("/lift-modal.glb"); // Load lift model parts
  const materials = useMaterials(); // Load available materials

  const partNames = Object.keys(nodes); // Get lift parts dynamically
  const materialNames = Object.keys(materials); // Get material names dynamically

  const [selectedPart, setSelectedPart] = useState(partNames[0] || ""); // Default part
  const [selectedMaterial, setSelectedMaterial] = useState(
    materialNames[0] || ""
  ); // Default material

  return (
    <div className="w-full h-screen">
      <div className="absolute top-5 left-5 space-y-2 z-10">
        {/* Part Selector */}
        <select
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
          className="bg-gray-200 p-2 rounded"
        >
          {partNames.map((part) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>

        {/* Material Selector */}
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
          className="bg-gray-200 p-2 rounded"
        >
          {materialNames.map((mat) => (
            <option key={mat} value={mat}>
              {mat}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full h-full">
        <Canvas>
          <ambientLight intensity={100} />
          <pointLight position={[2, 2, 2]} />

          {/* Lift Model with Dynamic Part & Material */}
          <Lift
            selectedPart={selectedPart}
            selectedMaterial={selectedMaterial}
          />
          <Environment files="/indoor.exr" />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
