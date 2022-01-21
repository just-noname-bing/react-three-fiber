import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
    ArcballControls,
    DeviceOrientationControls,
    Environment,
    FirstPersonControls,
    FlyControls,
    MapControls,
    OrbitControls,
    TrackballControls,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    return (
        <>
            <primitive
                object={gltf.scene}
                scale={1 / 15}
                rotation={[1 / 3, 1 / 2, 0]}
                position={[-10, 0, -20]}
            />
        </>
    );
};

export default function App() {
    return (
        <div className="App">
            <Canvas style={{ minHeight: "100vh" }}>
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="warehouse" background />
                </Suspense>
            </Canvas>
        </div>
    );
}
