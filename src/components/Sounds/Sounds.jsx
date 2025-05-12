import React, { forwardRef, useContext, useEffect, useRef } from "react";
import SoundsSpot from "./SoundsSpot";
import { useFrame } from "@react-three/fiber";

import { damp } from "three/src/math/MathUtils.js";
import { calculateFloat } from "../../helpers/mathHelper";
import AppContext from "../../context/AppContext";
import audioSpots from "../../helpers/audioSpots";

const Sounds = ({ ecctrlRef }, ref) => {
	const allSpots = useRef([]);

	const {
		data: { allowSound },
	} = useContext(AppContext);

	useEffect(() => {
		if (!ref || !ref.current) return;

		if (allSpots.current.length <= 0) return;

		if (!allowSound) {
			allSpots.current.forEach((spot) => {
				spot.element.stop();
			});
		}

		if (allowSound) {
			setTimeout(() => {
				allSpots.current.forEach((spot) => {
					ref.current.add(spot.element.listener);
					spot.element.stop();
					spot.element.play();
				});
			}, 1000);
		}
		return () =>
			allSpots.current.forEach((spot) => {
				spot.element.stop();
			});
	}, [allSpots.current, ref.current, allowSound]);

	useFrame(() => {
		if (!ref || !ref.current) return;

		if (allSpots.current.length <= 0) return;

		const isDefault = allSpots.current[0].element.getPlaybackRate();
		const { ratioMax } = calculateFloat({ start: 14, end: 20, value: ecctrlRef?.current?.translation().z });
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
