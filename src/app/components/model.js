'use client'

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, PresentationControls, Environment, ContactShadows, Html } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

/* <mesh ref={mesh}>
    <primitive object={gltf.scene} />
</mesh> */


/* <mesh ref ={mesh} 
    castShadow receiveShadow 
    geometry={nodes.Walls.geometry} material={materials.Walls}>
</mesh> */
function Model(props) {
    const fileUrl = props.path;
    const mesh = useRef();
    const gltf = useLoader(GLTFLoader, fileUrl)
    let playAnim = true;
    const maxTimer = 60;
    let timer = 0;
    //const { nodes, materials } = useGLTF(fileUrl)

    useFrame(() => {
        if(props.rotateAnim){
            if(playAnim){
                mesh.current.rotation.y += 0.01;
                if(mesh.current.rotation.y > 2*Math.PI)
                    playAnim = false;
            }else{
                if(timer >= maxTimer){
                    playAnim = true;
                    timer = 0;
                    mesh.current.rotation.y = 0;
                }
                else
                    timer += 0.1;
            }
        }
            

            
    });

    return (
        <mesh ref={mesh} castShadow receiveShadow>
            <primitive object={gltf.scene} />
        </mesh> 
        
    );
}
export default Model;
