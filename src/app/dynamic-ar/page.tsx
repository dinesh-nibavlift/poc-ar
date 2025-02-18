import dynamic from "next/dynamic";
import React from "react";

const Lift = dynamic(() => import("../../components/dynamic-ar"), {
  ssr: false,
});
export default function DynamicPage() {
  return (
    <div>
      <Lift />
    </div>
  );
}
