import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Header from '../Header';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

describe('<Header />', () => {
  it('Tile component should fail without parameters', () => {
    render(<Header />);
    expect(console.error).toHaveBeenCalled();
  });

  it('Should match snapshot without heading text', () => {
    const tree = create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render logo and heading text', () => {
    const { getByTestId } = render(<Header heading="foo" />);

    const container = getByTestId('header');
    expect(container.tagName).toBe('DIV');
    expect(container.childElementCount).toBe(2);

    const logo = container.firstChild;
    expect(logo.tagName).toBe('IMG');

    const header = container.lastChild;
    expect(header.tagName).toBe('P');
    expect(header.textContent).toBe('foo');
  });

  it('Should match snapshot with heading text', () => {
    const tree = create(<Header heading="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render logo, heading text, and description', () => {
    const { getByTestId, getByAltText } = render(<Header heading="foo" description="bar" />);

    const container = getByTestId('header');
    expect(container.tagName).toBe('DIV');
    expect(container.childElementCount).toBe(3);

    const logo = getByAltText('logo');
    expect(logo.tagName).toBe('IMG');

    const header = getByTestId('heading');
    expect(header.tagName).toBe('P');
    expect(header.textContent).toBe('foo');

    const description = getByTestId('description');
    expect(description.tagName).toBe('DIV');
    expect(description.textContent).toBe('barView on GitHub');
  });

  it('Should match snapshot with heading and description text', () => {
    const tree = create(<Header heading="foo" descriptions="bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
