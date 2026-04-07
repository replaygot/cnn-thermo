"use client";

import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, Center, useGLTF, Environment } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import * as THREE from "three";

const SECTION_WIDTH = 8;
const MODEL_SCALE = 1;

interface Radiator3DProps {
  sections: number;
  heightMm: number;
  depthMm: number;
  color: string;
}

function RealSection({ color, position }: { color: string; position: [number, number, number] }) {
  const { scene } = useGLTF("/models/section.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const hexColor = useMemo(() => {
    switch (color) {
      case "Черный": return "#252525";
      case "Серебро": return "#A0A0A0";
      default: return "#FFFFFF";
    }
  }, [color]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const m = mesh.material as THREE.MeshStandardMaterial;
          m.color.set(hexColor);
          m.metalness = 0.6;
          m.roughness = 0.4;
          m.needsUpdate = true;
        }
      }
    });
  }, [clonedScene, hexColor]);

  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={[MODEL_SCALE, MODEL_SCALE, MODEL_SCALE]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

export default function Radiator3D({ sections, color }: Radiator3DProps) {
  const sectionsArray = Array.from({ length: sections }, (_, i) => i);

  return (
    /*
      Фон канваса адаптивный: используем CSS-переменную через inline style.
      В светлой теме — светло-серый, в тёмной — чуть темнее фона карточки.
    */
    <div
      className="w-full h-[400px] rounded-3xl overflow-hidden cursor-move touch-none"
      style={{ background: "var(--card-bg)" }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [40, 20, 150], fov: 35 }}
      >
        <Environment preset="city" />
        <Stage intensity={0.5} environment="city" adjustCamera={false} shadows="contact">
          <Center top>
            <group>
              {sectionsArray.map((i) => (
                <RealSection key={i} color={color} position={[i * SECTION_WIDTH, 0, 0]} />
              ))}
            </group>
          </Center>
        </Stage>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/section.glb");