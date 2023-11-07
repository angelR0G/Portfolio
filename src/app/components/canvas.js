'use client'

import { lazy, useRef } from 'react'
import { useFrame } from "@react-three/fiber/";
import { useGLTF, PresentationControls, Environment, ContactShadows } from '@react-three/drei'

const Model = lazy(() => import("./model"));


function Screen(props) {
    const fileUrl = "Assets/diorama.glb";
    const mesh = useRef();

    const { nodes, materials } = useGLTF(fileUrl)

    return (
        <mesh ref ={mesh} 
            castShadow receiveShadow 
            geometry={nodes.Screen.geometry}>
            <meshStandardMaterial emissive="#ff0000" emissiveIntensity={1} toneMapped={false} />
        </mesh>
        
    );
}

/*<EffectComposer disableNormalPass>
                <Bloom mipmapBlur luminanceThreshold={1} />
            </EffectComposer>*/

function CanvasTop() {
    const light = useRef()
    useFrame(() => {
        //light.current.intensity = Math.min((light.current.intensity+1), 200)
    })
  
    return (
        <group>
            <ambientLight intensity={0.01} />
            <spotLight ref={light} position={[0, 2, 8]} angle={1} penumbra={1} shadow-mapSize={2048} castShadow />
            <PresentationControls snap global zoom={0.6} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                <group position-y={-0.75} dispose={null}>
                    <Model path ={"Assets/diorama.glb"}/>
                    <Model path ={"Assets/dioramaSilla.glb"} rotateAnim={true}/>
                </group>
            </PresentationControls>
            <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
            <Environment preset="city" />
        </group>
    )
}

export default CanvasTop;