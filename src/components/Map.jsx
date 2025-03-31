import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { forwardRef, Suspense, useContext, useEffect, useMemo } from "react";
import * as THREE from "three";

import AppContext from "../context/AppContext";
import Floor from "./Floor";

const roomURL = "/assets/models/basement_3_room_1-transformed.glb";
const ceilingURL = "/assets/models/basement_3_ceiling_1-transformed.glb";

const Map = (props, ref) => {
	const [{ nodes: roomNodes }, { nodes: ceilingNodes, materials: ceilingMaterials }] = useGLTF([roomURL, ceilingURL]);
	const basement = roomNodes["basement_room001"];
	const fogColor = useMemo(() => new THREE.Color("#101010"));

	const {
		actions: { handleLoadMap },
	} = useContext(AppContext);

	useEffect(() => {
		handleLoadMap();
	}, []);

	const handleClick = (e) => {
		// need this click handler to block the clicks on the map where the doll is behind the wall
		e.stopPropagation();
	};
	return (
		<Suspense fallback={null}>
			<group>
				<group ref={ref} scale={3} position={[0, -0.9, 8]} dispose={null}>
					<group {...props} dispose={null}>
						<mesh geometry={ceilingNodes.basement_ceiling.geometry} material={ceilingMaterials["Material_0.013"]} scale={0.96} />
					</group>
					<mesh position={[0, 1, -5]}>
						<planeGeometry args={[4.5, 2, 1]} />
						<meshBasicMaterial color={fogColor} />
					</mesh>
					<RigidBody receiveShadow type="fixed" ccd position={[0, 0, 0]} colliders="trimesh">
						<group onClick={handleClick} onPointerOver={handleClick} dispose={null}>
							<primitive object={basement} />
						</group>
					</RigidBody>
				</group>
				<Floor />
			</group>
		</Suspense>
	);
};
useGLTF.preload([roomURL, ceilingURL]);

export default forwardRef(Map);
