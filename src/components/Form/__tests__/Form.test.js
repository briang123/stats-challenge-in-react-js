import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Form from '../Form';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();
const mockFn = jest.fn();

describe('<Form />', () => {
  it('Form component without props should not log error', () => {
    render(<Form />);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Form component without props should have an input group container with an input and button', () => {
    const { getByTestId } = render(<Form />);

    const container = getByTestId('form-container');
    expect(container.childElementCount).toBe(1);

    const group = container.firstChild;
    expect(group.childElementCount).toBe(2);

    const input = getByTestId('datapoint');
    expect(input).not.toBeNull();

    const button = getByTestId('submit-btn');
    expect(button).not.toBeNull();
  });

  it('Form component without props should render input with placeholder "Enter a value"', () => {
    const { getByTestId } = render(<Form />);

    const input = getByTestId('datapoint');
    expect(input.getAttribute('placeholder')).toEqual('Enter a number');
  });

  it('Form component without props should render input of type number', () => {
    const { getByTestId } = render(<Form />);

    const input = getByTestId('datapoint');
    expect(input.getAttribute('type')).toBe('number');
  });

  it('Form component without props should render input with null value', () => {
    const { getByTestId } = render(<Form />);

    const input = getByTestId('datapoint');
    expect(input.nodeValue).toBeNull();
  });

  it('Form component without props should render input with tabindex set to 0', () => {
    const { getByTestId } = render(<Form />);

    const input = getByTestId('datapoint');
    expect(input.getAttribute('tabindex')).toBe('0');
  });

  it('Form component without props should render submit button with tabindex = -1', () => {
    const { getByTestId } = render(<Form />);

    const button = getByTestId('submit-btn');
    expect(button.getAttribute('tabindex')).toBe('-1');
  });

  it('Form component without props should render the submit button disabled', () => {
    const { getByTestId } = render(<Form />);

    const button = getByTestId('submit-btn');
    expect(button.getAttribute('disabled')).toBe('');
  });

  it('Form component without props should render submit button with button text "Submit"', () => {
    const { getByTestId } = render(<Form />);

    const button = getByTestId('submit-btn');
    expect(button.textContent).toBe('Submit');
  });

  it('Form component with props should have an input group container with an input and button', () => {
    const { getByTestId } = render(
      <Form data-testid="form" dataSet={[1, 2]} setDataSet={mockFn} />
    );

    const container = getByTestId('form-container');
    expect(container.childElementCount).toBe(1);

    const group = container.firstChild;
    expect(group.childElementCount).toBe(2);

    const input = getByTestId('datapoint');
    expect(input).not.toBeNull();

    const button = getByTestId('submit-btn');
    expect(button).not.toBeNull();
  });

  it('Input should accept only numbers', () => {
    const { getByTestId } = render(
      <Form data-testid="form" dataSet={[1, 2]} setDataSet={mockFn} />
    );

    const input = getByTestId('datapoint');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(input.value).toBe('');
  });

  it('Submit button should be enabled when user types a number in the input', () => {
    const { getByTestId } = render(
      <Form data-testid="form" dataSet={[1, 2]} setDataSet={mockFn} />
    );

    const input = getByTestId('datapoint');
    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');

    const button = getByTestId('submit-btn');
    expect(button.getAttribute('disabled')).toBeNull();
  });

  it('Should match snapshot with props', () => {
    const tree = create(
      <Form data-testid="form" dataSet={[1, 2]} setDataSet={mockFn} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
