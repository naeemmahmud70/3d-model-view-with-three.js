import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import * as THREE from "three";
import Car from "./car";

export default function Three() {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[5, 0, 4]} />
      <OrbitControls
        minPolarAngle={angleToRadians(10)}
        maxPolarAngle={angleToRadians(80)}
      />

      {/* Car model */}
      <Car />

      {/* Floor */}
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh>

      {/* Ambient light */}
      <ambientLight args={["#ffffff", 0.25]} />

      {/* Spotlight light */}
      <spotLight
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
        castShadow
      />

      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
