import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ScaleWidget from '../components/scale-widget/ScaleWidget';


describe('Progress Circle', () => {
	let container, active_scale_text;
	beforeEach(() => {
		container = render(<ScaleWidget defaulValue={2} />).container;
		active_scale_text = container.getElementsByClassName('activeScale');
	})

	it('should have one active scale text', () => {
		expect(active_scale_text.length).toBe(1);
	});

	it('should have Low active scale text', () => {
		expect(active_scale_text[0]).toHaveTextContent('Low');
	});

	it('should have five scale bar', () => {
		const scale_bars = container.getElementsByClassName('item');
		expect(scale_bars.length).toBe(5);
	});

	it('should update active scale text on click', () => {
		fireEvent.click(screen.getByTestId('scale0'))
		expect(active_scale_text[0]).toHaveTextContent('High');
	})
});