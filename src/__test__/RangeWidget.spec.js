import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RangeWidget from '../components/range-widget/RangeWidget';
import ProgressCircle from '../components/range-widget/ProgressCircle';


describe('Range Input', () => {
	it('should update the value when the slider is moved', () => {
		render(<RangeWidget />)
		const slider = screen.getByRole("slider");
		fireEvent.change(slider, { target: { value: '4' } })
		expect(slider.value).toBe('4');
	});
});