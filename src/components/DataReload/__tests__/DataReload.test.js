import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { DATASET_1, DATASET_2 } from './../../../common/constants';
import DataReload from '../DataReload';

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  cleanup();
});

describe('<DataReload />', () => {
  it('Should not render the reload container if we are not supplying any props', () => {
    const { queryByText } = render(<DataReload />);

    const container = queryByText('reload-container');
    expect(container).toBeNull();
  });

  it('Should not render the reload container if we are passing an invalid onClick function as the prop', () => {
    const { queryByText } = render(<DataReload onClick="" />);

    const container = queryByText('reload-container');
    expect(container).toBeNull();
  });

  it('Should match snapshot without props', () => {
    const tree = create(<DataReload />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the reload container buttons if a valid onClick function is passed', () => {
    const validFunction = jest.fn();
    const { getByTestId } = render(<DataReload onClick={validFunction} />);

    const container = getByTestId('reload-container');
    expect(container.tagName).toBe('DIV');
    expect(container.childElementCount).toBe(1);

    const btnContainer = container.firstChild;
    expect(btnContainer.tagName).toBe('DIV');

    expect(btnContainer.childElementCount).toBe(2);

    const reload1234Btn = getByTestId(`btn-${DATASET_1.onClickArg}`);
    expect(reload1234Btn.tagName).toBe('BUTTON');
    expect(reload1234Btn.textContent).toBe(DATASET_1.buttonText);

    const reload4321Btn = getByTestId(`btn-${DATASET_2.onClickArg}`);
    expect(reload4321Btn.tagName).toBe('BUTTON');
    expect(reload4321Btn.textContent).toBe(DATASET_2.buttonText);
  });

  it('Button click events should pass when passing in an onClick event handler', () => {
    const validFunction = jest.fn();
    const { getByTestId } = render(<DataReload onClick={validFunction} />);

    const reload1234Btn = getByTestId(`btn-${DATASET_1.onClickArg}`);
    fireEvent.click(reload1234Btn);
    expect(validFunction).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(0);

    const reload4321Btn = getByTestId(`btn-${DATASET_2.onClickArg}`);
    fireEvent.click(reload4321Btn);
    expect(validFunction).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it('Should match snapshot with props', () => {
    const validFunction = jest.fn();
    const tree = create(<DataReload onClick={validFunction} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
