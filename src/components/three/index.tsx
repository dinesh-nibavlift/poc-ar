"use client";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

import { ModalWrapper } from "@/components/three/lift";
import LiftControls from "@/components/three/lift/controls";
import EliteConfigProvider from "@/context/elite-config.context";

import { useGLTF } from "@react-three/drei";

export default function LiftModal() {
  const ref = useRef<HTMLDivElement>(null);

  const { nodes, materials }: any = useGLTF("/elite-config/glb/lift-modal.glb");
  const { materials: textures } = useGLTF("/elite-config/glb/Materials.glb");

  useEffect(() => {
    if (document) {
      const body = document?.getElementsByTagName("body")[0];
      body.style.overflow = "hidden";
    }
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <EliteConfigProvider
        nodes={nodes}
        materials={materials}
        textures={textures}
      >
        <div
          ref={ref}
          className="mt-[8dvh] grid grid-cols-[auto_393px] max-lg:grid-cols-1 max-lg:pt-[10dvh] max-lg:h-auto config-option-class"
        >
          <div className="h-full flex flex-col asset-wrapper">
            {/* Preview  */}
            <div className="h-full items-center flex justify-center">
              <div
                className={twMerge(
                  "preview-asset-section w-full scale-100 min-lg:touch-none h-full min-lg:!h-[calc(100dvh-var(--nl-header-height))] min-lg:!top-[--nl-header-height]",
                  "is-active"
                )}
                role="presentation"
              >
                <ModalWrapper />
              </div>
            </div>
          </div>
          {/* Controls  */}

          <div className="mx-5 max-h-[100vh] overflow-y-scroll custom-scroll pb-28 p-2 config-option-class">
            <LiftControls />
          </div>
        </div>
      </EliteConfigProvider>
    </div>
  );
}
