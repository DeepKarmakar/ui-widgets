import { useState } from 'react'
import './ScaleWidget.scss'

const ScaleWidget = () => {
	const initialScale = [
		{
			name: 'High',
			hover: false,
			click: false
		},
		{
			name: 'Medium',
			hover: false,
			click: false
		},
		{
			name: 'Medium',
			hover: false,
			click: false
		},
		{
			name: 'Low',
			hover: false,
			click: false
		},
		{
			name: 'Low',
			hover: false,
			click: false
		},
	]

	const [scale, setScale] = useState(initialScale)
	const [activeScale, setActiveScale] = useState()

	const activeHandler = (activeIndex, type) => {
		const newVal = scale.map((item, index) => {
			if (activeIndex <= index) {
				item[type] = true
			} else {
				item[type] = false
			}
			return item;
		})

		setScale(newVal);
	}

	const mouseLeaveHandle = () => {
		const newVal = scale.map(item => {
			item.hover = false;
			return item
		})
		setScale(newVal);
	}

	return (
		<div className="scale-wraper">
			<div className='activeScale'>{activeScale}</div>
			<div className='scales'>
				{
					scale.map((item, index) => (
						<div
							key={index}
							className={`item ${item.click || item.hover ? 'active' : ''}`}
							onClick={() => { activeHandler(index, 'click'); setActiveScale(item.name) }}
							onMouseOver={() => activeHandler(index, 'hover')}
							onMouseLeave={() => mouseLeaveHandle()}
						>
							<div></div>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default ScaleWidget;