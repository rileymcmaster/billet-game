import { RigidBody } from "@react-three/rapier";

export default function Floor() {
	return (
		<RigidBody type="fixed" ccd colliders="cuboid">
			<mesh receiveShadow position={[0, -3.5, 0]}>
				<boxGeometry args={[300, 5, 300]} />
				<meshStandardMaterial color="#272424" />
			</mesh>
		</RigidBody>
	);
}
