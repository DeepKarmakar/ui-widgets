import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressCircle from '../components/range-widget/ProgressCircle';


describe('Progress Circle', () => {
	it('should update the circle text', () => {
		render(<ProgressCircle size={250} value={4} strokeWidth={5} circleGap={10} />)
		const circleText = screen.getByTestId('circle-text')
		expect(circleText).toHaveTextContent(4);
	});
});