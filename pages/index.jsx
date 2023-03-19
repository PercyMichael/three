import {
  Billboard,
  Environment,
  OrbitControls,
  useVideoTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

//import { OfficeChair } from "../components/OfficeChair";
import { House } from "../components/House";
import { Lowhouse } from "../components/Lowhouse";
import { BillBoard } from "../components/BillBoard";

// const Box = ({ position, color, args }) => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02));
//   const texture = useLoader(TextureLoader, "/textures/wood.jpg");
//   return (
//     <mesh castShadow position={position} ref={mesh}>
//       <boxBufferGeometry attach={"geometry"} args={args} />
//       <meshStandardMaterial
//         map={texture}
//         color={color}
//         metalness={0.9}
//         roughness={0.2}
//       />
//     </mesh>
//   );
// };

const Tv = () => {
  const texture = useVideoTexture("/20th.mp4", { muted: 0 });
  return (
    <mesh position={[5, 4.27, 0.24]}>
      <planeGeometry args={[4.7, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Home = () => {
  const controlsRef = useRef();
  return (
    <div className="bg-[#b8d7ff] h-screen">
      <Canvas
        shadows
        colorManagement
        camera={{ position: [4, 3, 13], fov: 100 }}
      >
        <Environment preset="sunset" blur={{ value: 0.65, min: 0, max: 1 }} />
        <ambientLight intensity={0.3} />

        <directionalLight intensity={0.7} castShadow position={[0, 10, 0]} />

        <House position={[-3, 0, 2]} />
        <BillBoard position={[5, 0, 0]} />
        <Tv />

        <OrbitControls
          ref={controlsRef}
          screenSpacePanning={false}
          mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE,
          }}
          maxDistance={19}
          minDistance={12}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Home;
