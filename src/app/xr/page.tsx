import dynamic from "next/dynamic";
import React from "react";

const ARScene = dynamic(() => import("../../components/xr"), {
  ssr: false,
});

export default function XRPage() {
  return (
    <div>
      <ARScene />
    </div>
  );
}
