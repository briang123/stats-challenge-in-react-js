import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Button from '../Button';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();
const mockFn = jest.fn();

describe('<Button />', () => {
  it('Button component without onClick prop should log error and not render button', () => {
    const { queryByTitle } = render(<Button />);
    expect(console.error).toHaveBeenCalled();
    const button = queryByTitle('BUTTON');
    expect(button).toBeNull();
  });

  it('Button component with an invalid onClick function prop should log error and not render button', () => {
    const { queryByTitle } = render(<Button onClick="" />);
    expect(console.error).toHaveBeenCalled();
    const button = queryByTitle('BUTTON');
    expect(button).toBeNull();
  });

  it('Button component with an valid onClick function and no other props should render button', () => {
    const { container } = render(<Button onClick={mockFn} />);
    expect(console.error).not.toHaveBeenCalled();
    const btn = container.querySelector('button');
    expect(btn).not.toBeNull();
  });

  it('Button component with an valid onClick and text value for props should show button text', () => {
    const { container } = render(<Button onClick={mockFn} text="foo" />);
    const btn = container.querySelector('button');
    expect(btn.textContent).toBe('foo');
  });

  it('Button component with an valid onClick and text value for props should show button text', () => {
    const { getByTestId } = render(<Button text="foo" testid="bar" onClick={mockFn} />);
    const btn = getByTestId('bar');
    expect(btn.textContent).toBe('foo');
  });

  it('Button component should be enabled by default', () => {
    const { getByTestId } = render(<Button text="foo" testid="bar" onClick={mockFn} />);
    const btn = getByTestId('bar');
    expect(btn.disabled).toBe(false);
  });

  it('Button component should have tabIndex=-1 by default', () => {
    const { getByTestId } = render(<Button text="foo" testid="bar" onClick={mockFn} />);
    const btn = getByTestId('bar');
    expect(btn.tabIndex).toBe(-1);
  });

  it('Button component should be of btnType default by default', () => {
    const { getByTestId } = render(<Button text="foo" testid="bar" onClick={mockFn} />);
    const btn = getByTestId('bar');
    expect(window.getComputedStyle(btn)._values['border-radius']).toBe('44px');
  });

  it('Button component should reflect the btnType when set to submit', () => {
    const { getByTestId } = render(
      <Button text="foo" testid="bar" btnType="submit" onClick={mockFn} />
    );
    const btn = getByTestId('bar');
    expect(window.getComputedStyle(btn)._values['border-radius']).toBe('0px 20px 20px 0px');
  });

  it('Button component should be disabled when we set it to be', () => {
    const { getByTestId } = render(
      <Button text="foo" testid="bar" disabled={true} onClick={mockFn} />
    );
    const btn = getByTestId('bar');
    expect(btn.disabled).toBe(true);
  });

  it('Should match snapshot with props', () => {
    const tree = create(
      <Button text="foo" testid="bar" disabled={true} onClick={mockFn} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
