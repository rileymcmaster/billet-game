import { useVideoTexture } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from "three";

const videoURL = "./assets/eyes.mp4";

const Eyes = () => {
	const texture = useVideoTexture(videoURL);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.x = 2;

	return (
		<Suspense>
			<mesh position={[9, 0, 10]} rotation-y={Math.PI / 2}>
				<sphereGeometry args={[35, 35]} />
				<meshBasicMaterial fog={false} side={THREE.BackSide} map={texture} toneMapped={false} />
			</mesh>
		</Suspense>
	);
};

export default Eyes;
