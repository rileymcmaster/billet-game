import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { forwardRef, Suspense } from "react";

const roomURL = "/assets/models/basement_3_room_1-transformed.glb";
const ceilingURL = "/assets/models/basement_3_ceiling_1-transformed.glb";

const Map = (props, ref) => {
	const [{ nodes: roomNodes }, { nodes: ceilingNodes, materials: ceilingMaterials }] = useGLTF([roomURL, ceilingURL]);
	const basement = roomNodes["basement_room001"];

	const handleClick = (e) => {
		// need this click handler to block the clicks on the map where the doll is behind the wall
		e.stopPropagation();
	};

	return (
		<Suspense fallback={null}>
			<group ref={ref} scale={3} position={[0, -0.9, 8]} dispose={null}>
				<group {...props} dispose={null}>
					<mesh geometry={ceilingNodes.basement_ceiling.geometry} material={ceilingMaterials["Material_0.013"]} scale={0.96} />
				</group>
				<RigidBody receiveShadow type="fixed" ccd position={[0, 0, 0]} colliders="trimesh">
					<group onClick={handleClick} onPointerOver={handleClick} dispose={null}>
						<primitive object={basement} />
					</group>
				</RigidBody>
			</group>
		</Suspense>
	);
};
useGLTF.preload([roomURL, ceilingURL]);
// useGLTF.preload(ceilingURL);

export default forwardRef(Map);
