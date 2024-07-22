import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { Ball } from "../Primitives/Ball";
import { BasicLoader } from "../BasicLoader";

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

      console.log("newWidth", newWidth);
      console.log("height", height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [canvasRef.current]);

  return (
    <Canvas
      ref={canvasRef}
      className={`!touch-pan-y bg-gray-500`}
      style={{ height }}
      camera={{ zoom: 20 }}
      orthographic
    >
      <Suspense fallback={<BasicLoader />}>
        {technologies.map((tech, index) => {
          let x = 0;
          let y = 0;

          if (width > 0) {
            const ballsPerRow = Math.floor(width / 160);
            const row = Math.floor(index / ballsPerRow);
            const col = index % ballsPerRow;

            if (width < 320) {
              x = col * 8 - width / 250;
              y = row * -8 + height / 44;
            } else if (width < 480) {
              x = col * 8 - width / 80;
              y = row * -8 + height / 48;
            } else if (width < 640) {
              x = col * 8 - width / 60;
              y = row * -8 + height / 52;
            } else if (width < 960) {
              x = col * 8 - width / 52;
              y = row * -8 + height / 58;
            } else {
              x = col * 8 - width / 48;
              y = row * -8 + height / 76;
            }
          }

          return (
            <Ball
              key={tech.name}
              index={index}
              imgUrl={tech.icon}
              position={[x, y, 0]}
            />
          );
        })}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { BallCanvas };
