import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import Tile from './../Tile';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test.skip('Tile component should fail without parameters', () => {
  render(<Tile />);
  expect(console.error).toHaveBeenCalled();
});

const data = [1, 2, 3, 4, 5];
const title = 'foo';
const calculate = jest.fn();

test.skip('Tile component should pass with all props', () => {
  const { getByTestId } = render(<Tile title={title} value={data} />);
  expect(console.error).not.toHaveBeenCalled();
  // expect(getByTestId('').getAttribute('href')).toBe(`/${movie.id}`);
  // expect(getByTestId('movie-img').src).toBe(`${POSTER_PATH}${movie.poster_path}`);
});
