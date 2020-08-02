import React from 'react';
import { cleanup, render } from '@testing-library/react';
import {
  TILE_VALUE_MEAN_ID,
  TILE_VALUE_MODE_ID,
  TILE_VALUE_STDDEV_ID,
  TILE_VALUE_MEDIAN_ID,
} from './../../../common/constants';
import Dashboard from '../Dashboard';

afterEach(() => {
  cleanup();
});

describe('<Dashboard />', () => {
  it('Dashboard component without props should render "--" for each tile', () => {
    const { getByTestId } = render(<Dashboard />);

    const meanValue = getByTestId(TILE_VALUE_MEAN_ID);
    expect(meanValue.textContent).toBe('--');

    const medianValue = getByTestId(TILE_VALUE_MEDIAN_ID);
    expect(medianValue.textContent).toBe('--');

    const stdDevValue = getByTestId(TILE_VALUE_STDDEV_ID);
    expect(stdDevValue.textContent).toBe('--');

    const modeValue = getByTestId(TILE_VALUE_MODE_ID);
    expect(modeValue.textContent).toBe('--');
  });

  it('Should render value in tile when passing value for mean, median, stdDev, and mode props', () => {
    const { getByTestId } = render(<Dashboard mean={0} median={1} stdDev={2} mode={3} />);

    const meanValue = getByTestId(TILE_VALUE_MEAN_ID);
    expect(meanValue.textContent).toBe('0');

    const medianValue = getByTestId(TILE_VALUE_MEDIAN_ID);
    expect(medianValue.textContent).toBe('1');

    const stdDevValue = getByTestId(TILE_VALUE_STDDEV_ID);
    expect(stdDevValue.textContent).toBe('2');

    const modeValue = getByTestId(TILE_VALUE_MODE_ID);
    expect(modeValue.textContent).toBe('3');
  });
});
