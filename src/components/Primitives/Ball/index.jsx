import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  const decal = useTexture(imgUrl);

  return (
    // <Float
    //   speed={3}
    //   rotationIntensity={1.25}
    //   floatIntensity={2.5}
    // >
    //   <ambientLight intensity={0.25} />
    //   <directionalLight position={[0, 0, 0.05]} />
    //   <mesh scale={2.75}>
    //     <icosahedronGeometry args={[1, 1]} />
    //     <meshStandardMaterial
    //       color="#666"
    //       flatShading
    //     />
    //     <Decal
    //       position={[0, 0, 1]}
    //       rotation={[2 * Math.PI, 0, 6.25]}
    //       map={decal}
    //       flatShading
    //     />
    //   </mesh>
    // </Float>

    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#666"
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

export { Ball };
