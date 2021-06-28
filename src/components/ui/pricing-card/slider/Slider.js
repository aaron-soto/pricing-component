import "./slider.scss";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../../helpers/Store";

export const Slider = () => {
	const { slideValue } = useContext(Context);
	const [slideValueState, setSlideValueState] = slideValue;

	useEffect(() => {
		console.log(slideValueState);
		console.log();
	}, [slideValueState]);

	const hangleValueChange = (e) => {
		setSlideValueState(e.target.value);
	};

	return (
		<div className="slidecontainer">
			<div className="slider-bg-bg"></div>
			<div
				className="slider-bg"
				style={{ width: `${100 - 25 * (5 - slideValueState)}%` }}
			></div>
			<input
				type="range"
				min="1"
				max="5"
				value={slideValueState}
				class="slider"
				id="myRange"
				onChange={hangleValueChange}
			/>
		</div>
	);
};
