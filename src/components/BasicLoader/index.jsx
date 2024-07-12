import React from "react";
import { Html, useProgress } from "@react-three/drei";

const BasicLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p className="mb-20 text-xl text-white font-extrabold">{progress.toFixed(0)}%</p>
    </Html>
  );
};

export { BasicLoader };
