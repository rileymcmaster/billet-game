import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from "react";

const mapURL = "/assets/models/basement_2_6.glb";
const roomURL = "/assets/models/basement_3_room_1.glb";
const ceilingURL = "/assets/models/basement_3_ceiling_1-transformed.glb";

const Map = (props) => {
	const { nodes: roomNodes } = useGLTF(roomURL);
	const { nodes: ceilingNodes, materials: ceilingMaterials } = useGLTF(ceilingURL);
	const basement = roomNodes["basement_room001"];

	const handleClick = (e) => {
		// need this click handler to block the clicks on the map where the doll is behind the wall
		e.stopPropagation();
	};

	return (
		<group scale={3} position={[0, -0.9, 8]} dispose={null}>
			{/* <group {...props} dispose={null}>
				<mesh geometry={ceilingNodes.basement_ceiling.geometry} material={ceilingMaterials["Material_0.013"]} scale={0.96} />
			</group> */}
			<RigidBody receiveShadow type="fixed" ccd position={[0, 0, 0]} colliders="trimesh">
				<group onClick={handleClick} onPointerOver={handleClick} dispose={null}>
					<primitive object={basement} />
				</group>
			</RigidBody>
		</group>
	);
};
useGLTF.preload(roomURL);
useGLTF.preload(ceilingURL);

export default Map;
