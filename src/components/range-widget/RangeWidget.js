import { useState } from "react";
import './RangeWidget.scss';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect } from "react";
import ProgressCircle from "./ProgressCircle";

const RangeWidget = ({ size = 250, defaulValue = 5, circleGap = 30 }) => {
	const [range, setRange] = useState(defaulValue);
	const [widgetSize, setWidgetSize] = useState(size);
	const { windowWidth } = useWindowDimensions();
	const paddingArea = 40;


	const progressHandler = (value) => {
		setRange(value);
	}
	useEffect(() => {
		// handle resize
		if ((windowWidth) <= (size + paddingArea)) {
			setWidgetSize(windowWidth - paddingArea)
		} else {
			setWidgetSize(size)
		}
	}, [windowWidth])
	return (
		<div
			className="range-wrapper d-flex flex-column align-items-center"
			style={{ width: widgetSize }}>

			<ProgressCircle size={widgetSize} value={range} strokeWidth={5} circleGap={circleGap} />
			<div className="range">
				<input
					type="range"
					min="0"
					max="10"
					step="1"
					role="slider"
					value={range}
					className="slider"
					onChange={(e) => progressHandler(e.target.value)} />
			</div>
			{/* <h1>{range}</h1> */}
		</div>
	);
}

export default RangeWidget;