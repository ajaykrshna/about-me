import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Mod() {
    return (
        <div className="canva--container">
            <Canvas shadows>
                <ambientLight intensity={100} />
                <color attach="background" args={['#212121']} />
                <Stage shadows="accumulative" intensity={0.8} />
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>
    );
}