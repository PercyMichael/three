import { Environment, OrbitControls, useVideoTexture } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { OfficeChair } from "../components/OfficeChair";
import { House } from "../components/House";
import { TextureLoader } from "three";

const Box = ({ position, color, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02));
  const texture = useLoader(TextureLoader, "/textures/wood.jpg");
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach={"geometry"} args={args} />
      <meshStandardMaterial
        map={texture}
        color={color}
        metalness={0.9}
        roughness={0.2}
      />
    </mesh>
  );
};

const Tv = () => {
  const texture = useVideoTexture("/test.mp4", { muted: 1 });
  return (
    <mesh position={[-4, 0, 0]}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Home = () => {
  const controlsRef = useRef();
  return (
    <div className="bg-[#fff4f4] h-screen">
      <Canvas
        shadows
        colorManagement
        camera={{ position: [-1, 3, 7], fov: 60 }}
      >
        <Environment preset="sunset" blur={{ value: 0.65, min: 0, max: 1 }} />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} castShadow position={[0, 10, 0]} />
        <pointLight intensity={1.5} position={[0, 0, 10]} />
        <pointLight position={[0, 10, 0]} intensity={1} />

        <Box position={[0, 0, 0]} color={"red"} />
        <Box position={[2, 0, 0]} color={"purple"} args={[1, 2, 1]} />
        <Box position={[-2, 0, 0]} color={"yellow"} />
        <OfficeChair position={[4, 0, 0]} />
        <House />
        <Box position={[6, 0, 0]} />
        <Tv />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <planeBufferGeometry attach={"geometry"} args={[25, 25]} />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </group>

        <OrbitControls
          ref={controlsRef}
          screenSpacePanning={false}
          mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE,
          }}
          maxDistance={20}
          minDistance={4.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Home;
