import { renderHook } from '@testing-library/react-hooks';
import useNumArray from '../useNumArray';

describe('useNumArray custom hook', () => {
  let value;
  let dataSet;

  beforeEach(() => {
    value = null;
    dataSet = [];
  });

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it('Assert that an error is logged for each of the mean, median, stdDev, and mode calls when there is an invalid dataset', () => {
    renderHook(() => useNumArray(['1', '2', '3']));
    expect(console.error).toHaveBeenCalledTimes(4);
  });

  it('Assert that an error is logged and mean is null when there is an empty dataset', () => {
    const { result } = renderHook(() => useNumArray(dataSet));
    const mean = result.current[0];
    expect(mean).toBeNull();
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('Assert that an error is logged and median is null when there is an empty dataset', () => {
    const { result } = renderHook(() => useNumArray(dataSet));
    const median = result.current[1];
    expect(median).toBeNull();
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('Assert that an error is logged and stdDev is null when there is an empty dataset', () => {
    const { result } = renderHook(() => useNumArray(dataSet));
    const stdDev = result.current[2];
    expect(stdDev).toBeNull();
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('Assert that an error is logged and mode is null when there is an empty dataset', () => {
    const { result } = renderHook(() => useNumArray(dataSet));
    const mode = result.current[3];
    expect(mode).toBeNull();
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('Assert that an error is not logged and mean is "1" when passing dataset of [1] with no precision supplied', () => {
    const data = [1];
    const { result } = renderHook(() => useNumArray(data, 0));
    const mean = result.current[0];
    expect(console.error).not.toHaveBeenCalled();
    expect(mean).toBe('1');
  });

  it('Assert that an error is not logged and mean is "1.0" when passing dataset of [1] with precision of 1 supplied', () => {
    const data = [1];
    const { result } = renderHook(() => useNumArray(data, 1));
    const mean = result.current[0];
    expect(console.error).not.toHaveBeenCalled();
    expect(mean).toBe('1.0');
  });

  it('Assert that mean is "1.5" when passing dataset of [1,2] with precision of 1 supplied', () => {
    const data = [1, 2];
    const { result } = renderHook(() => useNumArray(data, 1));
    const mean = result.current[0];
    expect(mean).toBe('1.5');
  });

  it('Assert that median is "1.0" when passing dataset of [1] with precision of 1 supplied', () => {
    const data = [1];
    const { result } = renderHook(() => useNumArray(data, 1));
    const median = result.current[1];
    expect(console.error).not.toHaveBeenCalled();
    expect(median).toBe('1.0');
  });

  it('Assert that median is "2.0" when passing dataset of [1,2,3] with precision of 1 supplied', () => {
    const data = [1, 2, 3];
    const { result } = renderHook(() => useNumArray(data, 1));
    const median = result.current[1];
    expect(median).toBe('2.0');
  });

  it('Assert that stdDev is undefined when passing dataset of [1] with precision of 1 supplied', () => {
    const data = [1];
    const { result } = renderHook(() => useNumArray(data, 1));
    const stdDev = result.current[2];
    expect(console.error).not.toHaveBeenCalled();
    expect(stdDev).toBeUndefined();
  });

  it('Assert that mode is "1.0" when passing dataset of [1] with precision of 1 supplied', () => {
    const data = [1];
    const { result } = renderHook(() => useNumArray(data, 1));
    const mode = result.current[3];
    expect(console.error).not.toHaveBeenCalled();
    expect(mode).toBe('1.0');
  });

  it('Assert that mode is "1.0,2.0" when passing dataset of [1,2] with precision of 1 supplied', () => {
    const data = [1, 2];
    const { result } = renderHook(() => useNumArray(data, 1));
    const mode = result.current[3];
    expect(console.error).not.toHaveBeenCalled();
    expect(mode).toBe('1.0,2.0');
  });
});
