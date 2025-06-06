/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 /Users/rileymcmaster/Projects/Personal/threejs/ecctrl/public/jrm_3_mixrig_7.glb --transform --simplify 
Files: /Users/rileymcmaster/Projects/Personal/threejs/ecctrl/public/jrm_3_mixrig_7.glb [30.03MB] > /Users/rileymcmaster/Projects/Personal/threejs/ecctrl/jrm_3_mixrig_7-transformed.glb [1.64MB] (95%)
*/

import React, { forwardRef, Suspense, useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { useGame } from "../../ecctrl/Ecctrl";
import * as THREE from "three";

const animationSet = {
	jump: "jump joy",
	idle: "idle",
	walk: "walk",
	run: "drunk run",
	fall: "falling",
	jumpIdle: "falling",
	jumpLand: "jump_land",
	crawl: "crawl",
	danceJazz: "dance jazz",
	danceSlide: "dance slide",
	danceSilly: "silly dance",
};

const defaultPos = [0, -0.5, 0];

const src = "/assets/models/jrm_3_mixrig_11-transformed.glb";

const Character_JRM = (props, refFwd) => {
	const { animation = null, position = defaultPos, scale = 0.6, rotate = 0, ...rest } = props;
	const characterRef = refFwd ? refFwd : useRef(null);

	const { scene, animations } = useGLTF(src);
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);
	const { ref, actions, names, mixer } = useAnimations(animations);

	const curAnimation = useGame((state) => state.curAnimation);
	const resetAnimation = useGame((state) => state.reset);
	const initializeAnimationSet = useGame((state) => state.initializeAnimationSet);

	// Initialize animation set
	useEffect(() => {
		initializeAnimationSet(animationSet);
	}, []);

	// check for looping animation, play that if yes
	useEffect(() => {
		const isValid = names.some((name) => animation === name);
		if (!animation || !isValid) return;
		actions[animation].reset().fadeIn(0.5).play();

		return () => actions[animation].fadeOut(0.5);
	}, [actions, names]);

	/**
	 * Character animations setup
	 */
	useEffect(() => {
		if (animation) return;
		// Play animation
		const action = actions[curAnimation ? curAnimation : animationSet.jumpIdle];

		// For jump and jump land animation, only play once and clamp when finish
		if (
			curAnimation === animationSet.jump ||
			curAnimation === animationSet.jumpLand ||
			curAnimation === animationSet.action1 ||
			curAnimation === animationSet.action2 ||
			curAnimation === animationSet.action3 ||
			curAnimation === animationSet.action4
		) {
			action.reset().fadeIn(0.2).setLoop(THREE.LoopOnce, undefined).play();
			action.clampWhenFinished = true;
		} else {
			action.reset().fadeIn(0.2).play();
		}

		// When any action is clamp and finished reset animation
		action._mixer.addEventListener("finished", () => resetAnimation());

		return () => {
			// Fade out previous action
			action.fadeOut(0.2);

			// Clean up mixer listener, and empty the _listeners array
			action._mixer.removeEventListener("finished", () => resetAnimation());
			action._mixer._listeners = [];
		};
	}, [curAnimation]);

	return (
		<Suspense fallback={null}>
			<group ref={ref} {...rest} dispose={null}>
				<group ref={characterRef} name="Scene" scale={scale} position={position} rotation-y={rotate}>
					<skinnedMesh
						receiveShadow
						castShadow
						name="jrm-mesh"
						geometry={nodes["jrm-mesh"].geometry}
						material={materials["jrm lo.001"]}
						skeleton={nodes["jrm-mesh"].skeleton}
						rotation={[Math.PI / 2, 0, 0]}
					/>
					<primitive object={nodes.jrm} />
				</group>
			</group>
		</Suspense>
	);
};

export default forwardRef(Character_JRM);

useGLTF.preload(src);
