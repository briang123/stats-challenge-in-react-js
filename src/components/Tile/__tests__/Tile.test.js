import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tile from './../Tile';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

describe('<Tile />', () => {
  it('Tile component should log error and not render component if no props are supplied', () => {
    render(<Tile />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Tile component should log error and not render component if only the value prop is supplied', () => {
    render(<Tile value="1" />);
    expect(console.error).toHaveBeenCalled();
  });

  it("Tile component should render '--' if a title is supplied, but no value", () => {
    const { getByTestId } = render(<Tile title="foo" />);

    const container = getByTestId(`tile-container-foo`);
    expect(container.childElementCount).toBe(2);

    const value = getByTestId(`tile-value-foo`);
    expect(value.textContent).toBe('--');
  });

  it('Tile component should both title and value value and title props are supplied', () => {
    const { getByTestId } = render(<Tile title="foo" value="1" />);

    const container = getByTestId(`tile-container-foo`);
    expect(container.childElementCount).toBe(2);

    const title = getByTestId(`tile-title-foo`);
    expect(title.textContent).toBe('foo');

    const value = getByTestId(`tile-value-foo`);
    expect(value.textContent).toBe('1');
  });
});
