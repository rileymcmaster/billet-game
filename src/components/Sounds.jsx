import React, { forwardRef, useEffect, useRef } from "react";
import SoundsSpot from "./SoundsSpot";
import { useFrame } from "@react-three/fiber";

import { damp } from "three/src/math/MathUtils.js";
import { calculateFloat } from "../helpers/mathHelper";

const audioSpots = [
	{
		file: "/assets/soundbites/all eyes stems 100_3_Bass.mp3",
		position: [-3, 1, 1],
		color: "red",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Bass.mp3",
		position: [3, 1, 15],
		color: "grey",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Drums.mp3",
		position: [4, 1, 2],
		color: "orange",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Drums.mp3",
		position: [-3, 1, 11],
		color: "turquoise",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Drums.mp3",
		position: [4, 3, 22],
		color: "turquoise",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Guitar_1.mp3",
		position: [-1, 1, 5],
		color: "green",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Guitar_1.mp3",
		position: [-4, 3, 22],
		color: "green",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Guitar_2.mp3",
		position: [0, 1, 12],
		color: "blue",
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Vox_1.mp3",
		position: [4, 2, 9],
		color: "lightblue",
		distance: 1,
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Vox_1.mp3",
		position: [-1, 3, 24],
		color: "lightblue",
		distance: 2,
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Vox_2.mp3",
		position: [4, 2, 18],
		color: "darkblue",
		distance: 2,
	},
	{
		file: "/assets/soundbites/all eyes stems 100_3_Vox_clean.mp3",
		position: [-2, 1, -5],
		color: "yellow",
		distance: 1.5,
	},
];

const Sounds = ({}, ref) => {
	const allSpots = useRef([]);

	useEffect(() => {
		if (!ref || !ref.current) return;

		if (allSpots.current.length <= 0) return;

		setTimeout(() => {
			allSpots.current.forEach((spot) => {
				ref.current.add(spot.element.listener);
				spot.element.stop();
				spot.element.play();
			});
		}, 1000);
	}, [allSpots.current, ref.current]);

	useFrame(({ camera }) => {
		if (!ref || !ref.current) return;

		if (allSpots.current.length <= 0) return;

		const isDefault = allSpots.current[0].element.getPlaybackRate();
		const { ratioMax } = calculateFloat({ start: 14, end: 18, value: camera.position.z });
		if (ratioMax > 0) {
			allSpots.current.forEach((spot) => {
				spot.element.setPlaybackRate(damp(spot.element.playbackRate, 1 - ratioMax / 4, 0.1, 2));
			});
		} else if (isDefault !== 1) {
			allSpots.current.forEach((spot) => {
				spot.element.setPlaybackRate(damp(spot.element.playbackRate, 1, 0.25, 2));
			});
		}
		return null;
	});

	return (
		<group dispose={null}>
			{audioSpots.map((spot, i) => {
				return <SoundsSpot spot={spot} key={`${spot.file}-${i}`} ref={(element) => (allSpots.current[i] = { element, spot })} />;
			})}
		</group>
	);
};

export default forwardRef(Sounds);
