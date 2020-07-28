import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import DataReload from '../DataReload';
import { act } from 'react-dom/test-utils';

const original = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = original;
  cleanup();
});

describe('<DataReload />', () => {
  it('Should render with only a logo and no heading since one was not supplied', () => {
    const { getByTestId } = render(<DataReload />);

    const container = getByTestId('reload-container');
    expect(container.tagName).toBe('DIV');
    expect(container.childElementCount).toBe(1);

    const btnContainer = container.firstChild;
    expect(btnContainer.tagName).toBe('DIV');

    expect(btnContainer.childElementCount).toBe(2);

    const reload1234Btn = getByTestId('btn-1234');
    expect(reload1234Btn.tagName).toBe('BUTTON');
    expect(reload1234Btn.textContent).toBe('Reload JSON-1234 Data');

    const reload4321Btn = getByTestId('btn-4321');
    expect(reload4321Btn.tagName).toBe('BUTTON');
    expect(reload4321Btn.textContent).toBe('Reload JSON-4321 Data');
  });

  it('Button click events should not error when a click event is not passed as a prop', () => {
    const { getByTestId } = render(<DataReload />);

    const reload1234Btn = getByTestId('btn-1234');
    fireEvent.click(reload1234Btn);
    expect(console.error).toHaveBeenCalledTimes(0);

    const reload4321Btn = getByTestId('btn-4321');
    fireEvent.click(reload4321Btn);
    expect(console.error).toHaveBeenCalledTimes(0);
  });

  it('Should match snapshot without props', () => {
    const tree = create(<DataReload />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('Component should fail when not passing valid onClick function', () => {
  //   const invalidFunction = '';

  //   const { getByTestId } = render(<DataReload onClick={invalidFunction} />);
  //   const reload1234Btn = getByTestId('btn-1234');
  //   expect(reload1234Btn.tagName).toBe('BUTTON');
  //   // expect(() => render(<DataReload onClick={invalidFunction} />)).toThrowError(
  //   //   'TypeError: Invalid function'
  //   // );
  // });

  it.skip('Component should fail when not passing valid onClick function', () => {
    const invalidFunction = '';
    const { getByTestId } = render(<DataReload onClick={invalidFunction} />);

    const reload1234Btn = getByTestId('btn-1234');

    fireEvent.click(reload1234Btn);
    expect(console.error).toHaveBeenCalled();

    // const reload4321Btn = getByTestId('btn-4321');
    // fireEvent.click(reload4321Btn);
    // expect(console.error).toHaveBeenCalledTimes(0);
  });

  it('Button click events should pass when passing in an onClick event handler', () => {
    const validFunction = jest.fn();
    const { getByTestId } = render(<DataReload onClick={validFunction} />);

    const reload1234Btn = getByTestId('btn-1234');
    fireEvent.click(reload1234Btn);
    expect(validFunction).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledTimes(0);

    const reload4321Btn = getByTestId('btn-4321');
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
