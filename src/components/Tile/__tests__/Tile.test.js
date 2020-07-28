import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tile from './../Tile';

afterEach(() => {
  cleanup();
});

describe('<Tile />', () => {
  it("Tile component should render '--' when no props are supplied", () => {
    const { getByTestId } = render(<Tile />);

    const container = getByTestId('tile-container');
    expect(container.childElementCount).toBe(1);

    const value = getByTestId('tile-value');
    expect(value.textContent).toBe('--');
  });

  it('Tile component should render only value when title prop is not supplied', () => {
    const { getByTestId } = render(<Tile value="1" />);

    const container = getByTestId('tile-container');
    expect(container.childElementCount).toBe(1);

    const value = getByTestId('tile-value');
    expect(value.textContent).toBe('1');
  });

  it('Tile component should both title and value value and title props are supplied', () => {
    const { getByTestId } = render(<Tile title="foo" value="1" />);

    const container = getByTestId('tile-container');
    expect(container.childElementCount).toBe(2);

    const title = getByTestId('tile-title');
    expect(title.textContent).toBe('foo');

    const value = getByTestId('tile-value');
    expect(value.textContent).toBe('1');
  });
});
