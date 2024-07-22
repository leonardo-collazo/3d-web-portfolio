import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { Ball } from "../../Primitives/Ball";
import { BasicLoader } from "../../BasicLoader";
import { getBallCanvasPosition } from "./logic";

const BallCanvas = ({ technologies }) => {
  const canvasRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = canvasRef.current.parentNode.offsetWidth;

      setWidth(newWidth);

      if (newWidth > 0) {
        const ballsPerRow = Math.floor(newWidth / 160);
        const rows = Math.ceil(technologies.length / ballsPerRow);
        const height = rows * 160;

        setHeight(height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [canvasRef.current]);

  return (
    <Canvas
      ref={canvasRef}
      className={`!touch-pan-y mt-5`}
      style={{ height }}
      camera={{ zoom: 20 }}
      orthographic
    >
      <Suspense fallback={<BasicLoader />}>
        {technologies.map((tech, index) => {
          const position = getBallCanvasPosition(index, width, height);

          return (
            <Ball
              key={tech.name}
              index={index}
              imgUrl={tech.icon}
              position={[position.x, position.y, 0]}
            />
          );
        })}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { BallCanvas };
