import { OrbitControls, Stage, useVideoTexture } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { BillBoard } from "../components/BillBoard";
import { TextureLoader } from "three";

function Circle() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 100]} />

      <meshStandardMaterial metalness={1} roughness={0} />
    </mesh>
  );
}

function Tv() {
  const video = useVideoTexture("/20ths.mp4", { muted: 1 });
  return (
    <mesh position={[3, 1.86, 0.1]}>
      <planeGeometry args={[2.05, 0.877]} />

      <meshStandardMaterial map={video} />
    </mesh>
  );
}

function Cube() {
  const colorMap = useLoader(TextureLoader, "wood.jpeg");
  return (
    <mesh position={[6, 0.2, 0.1]}>
      <boxGeometry args={[0.5, 0.5]} />

      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

const index = () => {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 3, 20] }}>
        <OrbitControls
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 6.5}
          minDistance={5}
          maxDistance={10}
        />

        <Stage>
          <Circle />
          <BillBoard position={[3, 0, 0]} scale={0.01} />
          <Cube />
          <Tv />
        </Stage>
      </Canvas>
    </div>
  );
};

export default index;
