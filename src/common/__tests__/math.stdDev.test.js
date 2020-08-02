import { calculateStdDeviation } from '../math';

describe('math functions', () => {
  const evenNumArrayData = [1, 2];
  const singleNumberArrayData = [1];
  const invalidDataSet = ['a', 'b'];

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it(`Assert that an error is logged when Standard Deviation is called with an invalid dataset`, () => {
    calculateStdDeviation(invalidDataSet);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it(`Assert that an error is not going to be logged when Standard Deviation receives a single element number array`, () => {
    calculateStdDeviation(singleNumberArrayData);
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it(`Assert that a null value is returned when Standard Deviation only receives a single element number array`, () => {
    expect(calculateStdDeviation(singleNumberArrayData)).toBe(null);
    expect(() => calculateStdDeviation(singleNumberArrayData)).not.toThrow();
  });

  it(`Assert that a value is returned when Standard Deviation only receives a single element number array`, () => {
    expect(calculateStdDeviation(evenNumArrayData)).not.toBe(null);
    expect(() => calculateStdDeviation(evenNumArrayData)).not.toThrow();
  });
});
