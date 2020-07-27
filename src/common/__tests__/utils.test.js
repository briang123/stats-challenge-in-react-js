import { stripNonDigit, isEnterKey } from '../utils';

describe('Utils tests', () => {
  afterEach(() => {
    console.error.mockClear();
  });

  console.error = jest.fn();

  it(`isEnterKey: Assert that Enter key has been pressed`, () => {
    const e = {
      which: 13,
    };

    expect(isEnterKey(e)).toBe(true);
  });

  it(`isEnterKey: Assert that Enter key has been pressed using keyCode`, () => {
    const e = {
      keyCode: 13,
    };

    expect(isEnterKey(e)).toBe(true);
  });

  it(`isEnterKey: Assert that Enter key has not been pressed`, () => {
    const e = {
      which: 1,
    };

    expect(isEnterKey(e)).toBe(false);
  });

  it(`stripNonDigit: Assert that any non-number is removed from the value`, () => {
    expect(stripNonDigit('foo')).toEqual('');
  });

  it(`stripNonDigit: Assert that any number is not removed from the value`, () => {
    expect(stripNonDigit(1)).toEqual(1);
  });

  it(`stripNonDigit: Assert that any string number is returned as the same string number`, () => {
    expect(stripNonDigit('1')).toEqual('1');
  });
});
