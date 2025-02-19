import dynamic from "next/dynamic";
import React from "react";

const Lift = dynamic(() => import("../../components/three"), { ssr: false });
export default function ThreeJsPage() {
  return (
    <div>
      <Lift />
    </div>
  );
}
