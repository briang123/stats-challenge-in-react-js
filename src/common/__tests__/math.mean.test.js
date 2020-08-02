import { calculateMean } from '../math';

describe('Mean tests', () => {
  const evenNumArrayData = [1, 2];
  const singleNumberArrayData = [1];
  const invalidDataSet = ['a', 'b'];

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it(`Assert that an error is logged when Mean is called with an invalid dataset`, () => {
    calculateMean(invalidDataSet);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it(`Assert that a value is returned when Mean is called`, () => {
    expect(calculateMean(singleNumberArrayData)).not.toBe(null);
    expect(calculateMean(evenNumArrayData)).not.toBe(null);
  });
});
