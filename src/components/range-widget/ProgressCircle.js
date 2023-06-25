const ProgressCircle = ({ value = 80, size = 200, strokeWidth = 5, circleGap }) => {

	// Size of the enclosing square
	const innerSize = size - circleGap;
	const innerSize2 = innerSize - circleGap;
	// SVG centers the stroke width on the radius, subtract out so circle fits in square
	const radius = (size - strokeWidth) / 2;
	const radius2 = (innerSize - strokeWidth) / 2;
	const radius3 = (innerSize2 - strokeWidth) / 2;
	// Enclose cicle in a circumscribing square
	const viewBox = `0 0 ${size} ${size}`;
	// Arc length at 100% coverage is the circle circumference
	const dashArray = radius2 * Math.PI * 2;
	// Scale 100% coverage overlay with the actual percent
	const percentage = value * 10;
	const dashOffset = dashArray - dashArray * percentage / 100;

	return (
		<svg
			width={size}
			height={size}
			viewBox={viewBox}>
			<circle
				className="outer-circle"
				cx={size / 2}
				cy={size / 2}
				r={radius}
				strokeDasharray={8} />

			<circle
				className="circle-progress"
				cx={(innerSize - circleGap) / 2}
				cy={size / 2}
				r={radius2}
				strokeWidth={`${strokeWidth}px`}
				transform={`rotate(-90 ${innerSize / 2} ${innerSize / 2})`}
				style={{
					strokeDasharray: dashArray,
					strokeDashoffset: dashOffset
				}} />
			<circle
				className="inner-circle"
				cx={(innerSize + circleGap) / 2}
				cy={size / 2}
				r={radius3} />
			<text
				className="circle-text"
				x="50%"
				y="50%"
				dy=".3em"
				textAnchor="middle"
				data-testid="circle-text">
				{`${value}`}
			</text>
		</svg>
	);
}

export default ProgressCircle;