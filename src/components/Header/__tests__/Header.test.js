import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Header from '../Header';

describe('<Header />', () => {
  afterEach(cleanup);

  it('Should render with only a logo and no heading since one was not supplied', () => {
    const { getByTestId } = render(<Header />);

    const container = getByTestId('header');
    expect(container.tagName).toBe('DIV');
    expect(container.childElementCount).toBe(2);

    const logo = container.firstChild;
    expect(logo.tagName).toBe('IMG');

    const header = container.lastChild;
    expect(header.tagName).toBe('P');
    expect(header.textContent).toBe('');
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
});
