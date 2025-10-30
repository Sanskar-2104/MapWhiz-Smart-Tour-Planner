"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function GlobeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Stars radius={50} depth={50} count={2000} factor={4} fade />
        <Sphere args={[1, 100, 200]} scale={1.8}>
          <MeshDistortMaterial
            color="#1E90FF"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.5}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
