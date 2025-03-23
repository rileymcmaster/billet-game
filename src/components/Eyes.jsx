import { useVideoTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const videoURL = "./eyes.mp4";

const Eyes = () => {
	const texture = useVideoTexture(videoURL);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.x = 2;
	// texture.repeat.y = 1.08;
	return (
		<mesh position={[9, 0, 10]} rotation-y={Math.PI / 2}>
			{/* <planeGeometry /> */}
			<sphereGeometry args={[100, 100]} />
			{/* <meshNormalMaterial side={THREE.BackSide} /> */}
			<meshBasicMaterial fog={false} side={THREE.BackSide} map={texture} toneMapped={false} />
		</mesh>
	);
};

export default Eyes;
