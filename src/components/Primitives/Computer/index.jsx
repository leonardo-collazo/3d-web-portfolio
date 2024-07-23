import { useEffect, useState } from "react";
import { Float, useGLTF } from "@react-three/drei";

import { getComputerScale, getComputerPosition } from "./logic";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const [computerScale, setComputerScale] = useState(getComputerScale());
  const [computerPosition, setComputerPosition] = useState(getComputerPosition());

  const handleComputerScale = () => {
    setComputerScale(getComputerScale());
  };

  const handleComputerPosition = () => {
    setComputerPosition(getComputerPosition());
  };

  useEffect(() => {
    window.addEventListener("resize", handleComputerScale);
    window.addEventListener("resize", handleComputerPosition);

    return () => {
      window.removeEventListener("resize", handleComputerScale);
      window.removeEventListener("resize", handleComputerPosition);
    };
  }, []);

  return (
    <Float
      speed={2}
      rotationIntensity={0.75}
      floatIntensity={2}
    >
      <mesh>
        <hemisphereLight
          intensity={2}
          groundColor="black"
        />
        <spotLight
          position={[-20, 7.5, 8]}
          intensity={100}
        />
        <primitive
          object={computer.scene}
          scale={computerScale}
          position={computerPosition}
          rotation={[0, 0.25, -0.15]}
        />
      </mesh>
    </Float>
  );
};

export { Computer };
