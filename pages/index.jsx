import { SoftShadows } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({ position, color, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02));

  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach={"geometry"} args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Canvas
        shadows
        colorManagement
        camera={{ position: [-6, 3, 7], fov: 60 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[0, 10, 0]} />
        <pointLight intensity={1.5} />
        <pointLight position={[0, 10, 0]} intensity={0.4} />

        <Box position={[0, 0, 0]} color={"red"} />
        <Box position={[2, 0, 0]} color={"purple"} args={[1, 2, 1]} />
        <Box position={[-2, 0, 0]} color={"yellow"} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <planeBufferGeometry attach={"geometry"} args={[20, 20]} />
            <meshStandardMaterial color={"pink"} />
          </mesh>
        </group>
      </Canvas>
    </div>
  );
};

export default Home;
