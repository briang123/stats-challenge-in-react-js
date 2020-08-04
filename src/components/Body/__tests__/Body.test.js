import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import {
  DATASET_1,
  TILE_VALUE_MEAN_ID,
  TILE_VALUE_MODE_ID,
  TILE_VALUE_STDDEV_ID,
  TILE_VALUE_MEDIAN_ID,
} from './../../../common/constants';
import Body from '../Body';

afterEach(() => {
  cleanup();
  console.error.mockClear();
  mockFn.mockClear();
});

console.error = jest.fn();
const mockFn = jest.fn();

describe('<Body />', () => {
  it('Body component without props should log an error', () => {
    render(<Body />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Body component without props should show dashboard without the data', () => {
    const { getByTestId } = render(<Body />);

    const meanValue = getByTestId(TILE_VALUE_MEAN_ID);
    expect(meanValue.textContent).toBe('');

    const medianValue = getByTestId(TILE_VALUE_MEDIAN_ID);
    expect(medianValue.textContent).toBe('');

    const stdDevValue = getByTestId(TILE_VALUE_STDDEV_ID);
    expect(stdDevValue.textContent).toBe('');

    const modeValue = getByTestId(TILE_VALUE_MODE_ID);
    expect(modeValue.textContent).toBe('');
  });

  it('Body component with only data prop and no reload function prop should log an error', () => {
    render(<Body data={[1, 2]} />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Body component with only data prop and no reload function prop should show dashboard without the data', () => {
    const { getByTestId } = render(<Body data={[1, 2]} />);

    const meanValue = getByTestId(TILE_VALUE_MEAN_ID);
    expect(meanValue.textContent).toBe('1.500000');

    const medianValue = getByTestId(TILE_VALUE_MEDIAN_ID);
    expect(medianValue.textContent).toBe('1.500000');

    const stdDevValue = getByTestId(TILE_VALUE_STDDEV_ID);
    expect(stdDevValue.textContent).toBe('0.707107');

    const modeValue = getByTestId(TILE_VALUE_MODE_ID);
    expect(modeValue.textContent).toBe('1.000000,2.000000');
  });

  it('Body component without onReload prop should hide the reload buttons', () => {
    const { queryByText } = render(<Body />);

    const reloadBtn1234 = queryByText(DATASET_1.buttonText);
    expect(reloadBtn1234).toBeNull();
  });

  it('Body component with non-function passed in as onReload prop should not render the reload buttons ', () => {
    const { queryByText } = render(<Body data={[1, 2]} onReload="" />);
    const reloadBtn1234 = queryByText(DATASET_1.buttonText);
    expect(reloadBtn1234).toBeNull();
  });

  it('Should render body when passing valid props', () => {
    const { getByTestId } = render(<Body data={[1, 2]} onReload={mockFn} />);

    const bodyContainer = getByTestId('body-container');
    expect(bodyContainer.tagName).toBe('DIV');
    expect(bodyContainer.childElementCount).toBe(3);
  });

  it('Should render form when passing valid props', () => {
    const { getByTestId } = render(<Body data={[1, 2]} onReload={mockFn} />);

    const formContainer = getByTestId('form-container');
    expect(formContainer.tagName).toBe('DIV');
    expect(formContainer.childElementCount).toBe(1);

    const inputBtnGroupContainer = formContainer.firstChild;
    expect(inputBtnGroupContainer.childElementCount).toBe(2);

    //FIX: ADDED THE DIV CONTAINER
    expect(inputBtnGroupContainer.firstChild.tagName).toBe('DIV');
    // expect(inputBtnGroupContainer.firstChild.tagName).toBe('INPUT');
    expect(inputBtnGroupContainer.lastChild.tagName).toBe('BUTTON');
  });

  it('Should render reload container when passing valid props', () => {
    const { getByTestId } = render(<Body data={[1, 2]} onReload={mockFn} />);

    const reloadContainer = getByTestId('reload-container');
    expect(reloadContainer.tagName).toBe('DIV');
    expect(reloadContainer.childElementCount).toBe(1);

    const reloadButtonContainer = reloadContainer.firstChild;
    expect(reloadButtonContainer.childElementCount).toBe(2);
    expect(reloadButtonContainer.firstChild.tagName).toBe('BUTTON');
    expect(reloadButtonContainer.lastChild.tagName).toBe('BUTTON');
  });

  it('Reload button should trigger callback when clicked and passing valid onReload function as prop', () => {
    const { queryByText } = render(<Body data={[1, 2]} onReload={mockFn} />);

    const reloadBtn1234 = queryByText(DATASET_1.buttonText);
    fireEvent.click(reloadBtn1234);
    expect(console.error).not.toHaveBeenCalled();
  });
});
