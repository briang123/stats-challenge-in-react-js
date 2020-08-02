import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import NumberInput from '../NumberInput';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();
const mockFn = jest.fn();

describe('<NumberInput />', () => {
  it('Input component without passing a function to the setValue or onSubmit props should log error and not render input', () => {
    const { queryByTitle } = render(<NumberInput />);
    expect(console.error).toHaveBeenCalledTimes(1);

    const input = queryByTitle('INPUT');
    expect(input).toBeNull();
  });

  it('Input component passing a function to the setValue and prop, but not passing a reference input should log error and not render input', () => {
    const { queryByTitle } = render(<NumberInput setValue={mockFn} onSubmit={mockFn} />);

    expect(console.error).toHaveBeenCalledTimes(1);

    const input = queryByTitle('INPUT');
    expect(input).toBeNull();
  });

  it('Input component passing an input ref and a function to both setValue and onSubmit props should not log error and render number input with tabindex = -1', () => {
    const ref = React.createRef();
    const { debug } = render(<NumberInput ref={ref} setValue={mockFn} onSubmit={mockFn} />);

    expect(console.error).not.toHaveBeenCalled();

    debug();

    expect(ref.current).not.toBeNull();
    expect(ref.current.getAttribute('type')).toEqual('number');
    expect(ref.current.getAttribute('tabindex')).toEqual('-1');
  });

  it('Input component passing ref and funcs should and placeholder of "foo" should render a placeholder of "foo" on the input', () => {
    const ref = React.createRef();
    render(<NumberInput ref={ref} setValue={mockFn} onSubmit={mockFn} placeholder="foo" />);

    expect(ref.current.getAttribute('placeholder')).toEqual('foo');
  });

  it('Input should remain empty if user enters non-numbers', () => {
    const ref = React.createRef();
    render(<NumberInput ref={ref} setValue={mockFn} onSubmit={mockFn} placeholder="foo" />);

    const input = ref.current;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(input.value).toBe('');
  });

  it('Input should accept only numbers', () => {
    const ref = React.createRef();
    render(<NumberInput ref={ref} setValue={mockFn} onSubmit={mockFn} placeholder="foo" />);

    const input = ref.current;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');
  });

  it('Should match snapshot with props', () => {
    const ref = React.createRef();
    const tree = create(
      <NumberInput ref={ref} setValue={mockFn} onSubmit={mockFn} placeholder="foo" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
