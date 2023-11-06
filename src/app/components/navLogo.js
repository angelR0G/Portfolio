'use client'

import { lazy, useRef } from 'react'
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model = lazy(() => import("./model"));

function NavLogo(props) {
    const mesh = useRef();
    //const { nodes, materials } = useGLTF(fileUrl)

    useFrame(() => {
        mesh.current.rotation.y += Math.random()*0.01;
        mesh.current.rotation.x += Math.random()*0.01;
        mesh.current.rotation.z += Math.random()*0.01;
    });

    return (
        <group dispose={null}>
            <ambientLight/>
            <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
            <mesh ref={mesh} >
              <icosahedronGeometry  args={[2.2]} />
              <meshStandardMaterial color="white" />
            </mesh>
        </group>
        
    );
}
export default NavLogo;
