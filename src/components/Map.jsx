import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react";
import Bike from "./models/Bike";
import * as THREE from "three";

const mapURL = "/assets/models/basement_2_6.glb";

const Map = (props) => {
	const { nodes } = useGLTF(mapURL);
	const basement = nodes["basement_room001"];
	const roof = nodes["basement_ceiling"];
	const roof_end = nodes["basement_ceilingend"];
	const mirror = nodes["mirror_room002"];

	const handleClick = (e) => {
		// need this click handler to block the clicks on the map where the doll is behind the wall
		e.stopPropagation();
	};

	return (
		<group scale={3} position={[0, -0.9, 8]}>
			<group position-y={0.0}>
				<primitive object={roof} />
				<primitive object={roof_end} />
			</group>
			<group position-y={0}>
				<primitive object={mirror} />
			</group>
			<Bike />
			<RigidBody receiveShadow type="fixed" ccd position={[0, 0, 0]} colliders="trimesh">
				<group onClick={handleClick} onPointerOver={handleClick}>
					<primitive object={basement} />
				</group>
			</RigidBody>
		</group>
	);
};
useGLTF.preload(mapURL);

export default Map;
