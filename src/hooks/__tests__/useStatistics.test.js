import { renderHook } from '@testing-library/react-hooks';
import useStatistics from '../useStatistics';

describe('useStatistic custom hook', () => {
  let value;
  let initialDataSet;

  beforeEach(() => {
    value = null;
    initialDataSet = [];
  });

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it('Assert that an error is logged when there is an empty dataset', () => {
    renderHook(() => useStatistics(initialDataSet));
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('Assert that mean, median, and mode are "1" when a valid dataset of [1] is passed in', () => {
    const { result } = renderHook(() => useStatistics([1]));
    const { dataSet, setDataSet, mean, median, stdDev, mode } = result.current;
    expect(console.error).not.toHaveBeenCalled();
    expect(dataSet).toEqual([1]);
    expect(setDataSet).not.toBeUndefined();
    expect(mean).toBe('1.000000');
    expect(median).toBe('1.000000');
    expect(stdDev).toBeUndefined();
    expect(mode).toBe('1.000000');
  });

  it('Assert that stdDev is undefined when a valid dataset of [1] is passed in (more than 1 value is required for stdDev)', () => {
    const { result } = renderHook(() => useStatistics([1]));
    const { stdDev } = result.current;
    expect(stdDev).toBeUndefined();
  });

  it('Assert that stdDev has "0.70710678" when a valid dataset of [1,2] is passed', () => {
    const { result } = renderHook(() => useStatistics([1, 2]));
    const { stdDev } = result.current;
    expect(stdDev).toBe('0.707107');
  });

  it('Assert that mode has "1.000000,2.000000" when a valid dataset of [1,2] is passed', () => {
    const { result } = renderHook(() => useStatistics([1, 2]));
    const { mode } = result.current;
    expect(mode).toBe('1.000000,2.000000');
  });
});
