export const ARRAY_REQUIRED_MSG = 'An array is required';
export const EMPTY_NBR_ARRAY_MSG = 'The array must contain at least one number';
export const INVALID_NBR_ARRAY_MSG = 'The array must contain all numbers';
export const INVALID_STD_DEV_ARRAY_MSG = 'Standard deviation requires at least 2 numbers';

class NumArray {
  constructor(arr) {
    if (!Array.isArray(arr)) throw new Error(ARRAY_REQUIRED_MSG);
    if (!arr.every((value) => typeof value === 'number' && !isNaN(value)))
      throw new Error(INVALID_NBR_ARRAY_MSG);
    if (arr.length === 0) throw new Error(EMPTY_NBR_ARRAY_MSG);

    this._Array = arr;

    this.Length = this._Array.length;
    this.LengthIsEven = this.Length % 2 === 0;
    this.MiddleIndex = Math.ceil(this.Length / 2);
    this.MiddleIndexValue = this.SortedAsc()[this.MiddleIndex];
    this.MiddleIndexOffsetMinusOneValue = this.SortedAsc()[this.MiddleIndex - 1];
  }

  SortedAsc = () => this._Array.sort((a, b) => a - b);

  Mean = (precision = 8) => {
    // the average or the expected value
    return +(this._Array.reduce((prev, curr) => prev + curr, 0) / this.Length).toPrecision(
      precision
    );
  };

  Median = (precision = 8) => {
    // The middle value
    const medianEven = (this.MiddleIndexValue + this.MiddleIndexOffsetMinusOneValue) / 2;
    const medianOdd = this.MiddleIndexOffsetMinusOneValue;
    return +(this.LengthIsEven ? medianEven : medianOdd).toPrecision(precision);
  };

  StdDeviation = (precision = 8) => {
    if (this.Length === 1) throw new Error(INVALID_STD_DEV_ARRAY_MSG);

    // The amount of variation over a set of numbers (commonly used to measure confidence in statistical conclusions)
    // Square root of the array's variance
    // Variance is sum of squared differences from the mean divided by number of elements.
    // manual calculation:
    //    array = [1, 2]; Mean = 1.5
    //    sum of squared differences = [0.25, 0.25]
    //    variance = 0.5 / 1
    //    SQRT(0.5) = 0.70710678
    return +Math.sqrt(
      this._Array
        .map((value) => Math.pow(value - this.Mean(), 2))
        .reduce((prev, curr) => prev + curr) /
        (this.Length - 1)
    ).toPrecision(precision);
  };

  Mode = (precision = 8) => {
    // Number that appears most often

    const sortByMapValueDesc = (a, b) => b[1] - a[1];

    const mapWithTheMost = new Map();

    // update Map with count of each number in array
    this._Array.map((value) => mapWithTheMost.set(value, (mapWithTheMost.get(value) || 0) + 1));

    // sort map so that numbers with the mostest are at start
    const mostNumbersArr = [...mapWithTheMost].sort(sortByMapValueDesc);

    // pull the high count from first index
    const mostNumbersCount = mostNumbersArr[0][1];

    // look for modes where the count match (multiple modes may exist)
    const modeValue = mostNumbersArr.filter((item) => item[1] === mostNumbersCount);

    // return the mode(s)
    return modeValue.length === 1 ? [modeValue[0][0]] : modeValue[1].sort();
  };

  DebuggerOutput = () => {
    console.log('NumArray Class Output', {
      array: this._Array,
      length: this.Length,
      lengthIsEvent: this.LengthIsEven,
      middleIndex: this.MiddleIndex,
      middleIndexValue: this.MiddleIndexValue,
      MiddleIndexOffsetMinusOneValue: this.MiddleIndexOffsetMinusOneValue,
      sortedAsc: this.SortedAsc(),
      median: this.Median(),
      mean: this.Mean(),
      mode: this.Mode(),
      stdDev: this.StdDeviation(),
    });
  };
}

export default NumArray;
