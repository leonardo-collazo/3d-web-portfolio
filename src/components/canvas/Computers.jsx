import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { Loader } from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const scales = [
    [1024, 1],
    [768, 0.768],
    [640, 0.64],
    [560, 0.56],
    [489, 0.489],
    [450, 0.45],
    [425, 0.425],
    [375, 0.375],
    [0, 0.32],
  ];

  const positions = [
    [1024, [0, -4.2, -1.4]],
    [768, [0, -3.75, -1.25]],
    [640, [0, -3.5, -1.1]],
    [560, [0, -2.75, -0.95]],
    [489, [0, -2.75, -0.78]],
    [450, [0, -2.75, -0.75]],
    [425, [0, -2.25, -0.725]],
    [375, [0, -2.25, -0.6]],
    [0, [0, -2.25, -0.45]],
  ];

  const getComputerScale = () => scales.find(pair => window.innerWidth >= pair[0])[1];
  const getComputerPosition = () => positions.find(pair => window.innerWidth >= pair[0])[1];

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
    <mesh>
      <hemisphereLight
        intensity={1}
        groundColor="black"
      />
      <spotLight
        position={[-18, 7.5, 8]}
        angle={1}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={computerScale}
        position={computerPosition}
        rotation={[0, 0.25, -0.15]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      className="!touch-pan-y"
      frameloop="demand"
      shadows
      camera={{ position: [31, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
