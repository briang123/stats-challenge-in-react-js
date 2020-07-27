import { calculateMode } from '../math';

describe('Median tests', () => {
  const evenNumArrayData = [1, 2];
  const singleNumberArrayData = [1];
  const invalidDataSet = ['a', 'b'];

  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it(`Assert that an error is logged when Mode is called with an invalid dataset`, () => {
    calculateMode(invalidDataSet);
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it(`Assert that a value is returned when Mode is called`, () => {
    expect(calculateMode(singleNumberArrayData)).not.toBe(null);
    expect(calculateMode(evenNumArrayData)).not.toBe(null);
  });
});
