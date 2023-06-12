/* import "./styles.css"; */
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function Mod() {
    return (
        <div className="canva--container">
            <Canvas >
                <ambientLight intensity={100} />
                <color attach="background" args={['#212121']} />
                <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
                {/* <directionalLight color="white" position={[0, 0, 5]} /> */}
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, 10, 10]} />
                <hemisphereLight intensity={1} groundColor="black" skyColor="black"/>
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                   {/*  <Environment preset="city" background blur={1} /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}