import { calculateMedian } from '../math';

describe('Median tests', () => {
  const evenNumArrayData = [1, 2];
  const singleNumberArrayData = [1];
  const invalidDataSet = ['a', 'b'];

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it(`Assert that an error is logged when Median is called with an invalid dataset`, () => {
    calculateMedian(invalidDataSet);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it(`Assert that a value is returned when Median is called`, () => {
    expect(calculateMedian(singleNumberArrayData)).not.toBe(null);
    expect(calculateMedian(evenNumArrayData)).not.toBe(null);
  });
});
