import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl, position }) => {
  const decal = useTexture(imgUrl);

  return (
    <Float
      speed={3}
      rotationIntensity={1.25}
      floatIntensity={2.5}
      position={position}
    >
      <directionalLight position={[0, 0, 1.25]} />

      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#222"
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.25}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export { Ball };
