"use client";

import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/Ui";
import styles from "./page.module.css";

export default function Book() {
  return (
    <>
      <UI />
      <Loader />
      <div className={styles.book}>
        <Canvas
          shadows
          camera={{ position: [0, 1, 4], fov: 42 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 100,
          }}
        >
          <group position-y={-0.1} position-x={0.6}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </>
  );
}
