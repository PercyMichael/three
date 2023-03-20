import { OrbitControls, Stage, useVideoTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BillBoard } from "../components/BillBoard";

function Circle() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 100]} />

      <meshStandardMaterial metalness={1} roughness={0} />
    </mesh>
  );
}

function Tv() {
  const video = useVideoTexture("20th.mp4", { muted: 0 });
  return (
    <mesh position={[3, 1.86, 0.1]}>
      <planeGeometry args={[2.05, 0.877]} />

      <meshStandardMaterial map={video} />
    </mesh>
  );
}

const index = () => {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 3, 20] }}>
        <OrbitControls
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 6}
          minDistance={5}
          maxDistance={10}
        />

        <Stage>
          <Circle />
          <BillBoard position={[3, 0, 0]} scale={0.01} />
          <Tv />
        </Stage>
      </Canvas>
    </div>
  );
};

export default index;
