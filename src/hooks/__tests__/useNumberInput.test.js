import { renderHook, act } from '@testing-library/react-hooks';
import { isEnterKey } from '../../common/utils';
import useNumberInput from '../useNumberInput';

describe('useNumberInput custom hook', () => {
  let value;
  let dataSet;

  const setDataSet = (value) => (dataSet = value);

  const setValue = (v) => {
    const numValue = parseInt(v);
    value = isNaN(numValue) ? null : numValue;
  };

  const onSubmit = jest.fn((e) => {
    if (isEnterKey(e) && e.target.value !== '') {
      setDataSet([...dataSet, e.target.value]);
      setValue('');
    }
  });

  beforeEach(() => {
    value = null;
    dataSet = [1, 2];
  });

  it('Assert that onKeyUp an integer value will persist', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onKeyUp = result.current[0];
    const e = {
      currentTarget: { value: null },
      target: { value: '1' },
    };

    act(() => onKeyUp(e));
    expect(e.currentTarget.value).toBe('1');
  });

  it('Assert that onKeyUp a non-integer value will be cleared out', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onKeyUp = result.current[0];

    const e = {
      currentTarget: { value: null },
      target: { value: 'foo' },
    };
    act(() => onKeyUp(e));
    expect(e.currentTarget.value).toBe('');
  });

  it('Assert that clicking on any key while in the input, except for the Enter key key will not trigger onKeyPress and update the dataset', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onKeyPress = result.current[1];

    const e = { which: 1, target: { value: 3 } };
    act(() => onKeyPress(e));
    expect(onSubmit(e)).toBeUndefined();
    expect(dataSet).toEqual([1, 2]);
  });

  it('Assert that clicking Enter key will trigger onKeyPress and update the dataset', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onKeyPress = result.current[1];
    act(() => onKeyPress({ which: 13, target: { value: 3 } }));
    expect(dataSet).toEqual([1, 2, 3]);
  });

  it('Assert that onChange will trigger value state to be persisted and convert the string value to a number value', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onChange = result.current[2];
    act(() => onChange({ target: { value: '1' } }));
    expect(value).toBe(1);
  });

  it('Assert that onChange will trigger value state to be persisted', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onChange = result.current[2];
    act(() => onChange({ target: { value: 1 } }));
    expect(value).toBe(1);
  });

  it('Assert that onChange will not allow non-integers to be entered', () => {
    const { result } = renderHook(() => useNumberInput({ setValue, onSubmit }));
    const onChange = result.current[2];
    act(() => onChange({ target: { value: 'a' } }));
    expect(value).toBe(null);

    act(() => onChange({ target: { value: '$' } }));
    expect(value).toBe(null);
  });
});
