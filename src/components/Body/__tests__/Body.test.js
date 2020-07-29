import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import Body from '../Body';
import { DATASET_1 } from './../../../common/constants';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

describe('<Body />', () => {
  it('Body component without props should log an error, but show dashboard without the data', () => {
    const { queryByText, getByTestId } = render(<Body />);
    expect(console.error).toHaveBeenCalled();

    const meanValue = getByTestId('tile-value-Mean');
    expect(meanValue.textContent).toBe('');

    const medianValue = getByTestId('tile-value-Median');
    expect(medianValue.textContent).toBe('');

    const stdDevValue = getByTestId('tile-value-Std Deviation');
    expect(stdDevValue.textContent).toBe('');

    const modeValue = getByTestId('tile-value-Mode');
    expect(modeValue.textContent).toBe('');

    const reloadBtn1234 = queryByText(DATASET_1.buttonText);
    expect(reloadBtn1234).toBeNull();
  });

  it('Body component with only data prop and no reload function prop should log an error, but show dashboard without the data', () => {
    const { getByTestId } = render(<Body data={[1, 2]} />);
    expect(console.error).toHaveBeenCalled();

    const meanValue = getByTestId('tile-value-Mean');
    expect(meanValue.textContent).toBe('1.500000');

    const medianValue = getByTestId('tile-value-Median');
    expect(medianValue.textContent).toBe('1.500000');

    const stdDevValue = getByTestId('tile-value-Std Deviation');
    expect(stdDevValue.textContent).toBe('0.707107');

    const modeValue = getByTestId('tile-value-Mode');
    expect(modeValue.textContent).toBe('1.000000,2.000000');
  });

  //TODO: NEED MORE TESTS....

  // it('Should match snapshot without heading text', () => {
  //   const tree = create(<Header />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('Should render logo and heading text', () => {
  //   const { getByTestId } = render(<Header heading="foo" />);

  //   const container = getByTestId('header');
  //   expect(container.tagName).toBe('DIV');
  //   expect(container.childElementCount).toBe(2);

  //   const logo = container.firstChild;
  //   expect(logo.tagName).toBe('IMG');

  //   const header = container.lastChild;
  //   expect(header.tagName).toBe('P');
  //   expect(header.textContent).toBe('foo');
  // });

  // it('Should match snapshot with heading text', () => {
  //   const tree = create(<Header heading="foo" />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it('Should render logo, heading text, and description', () => {
  //   const { getByTestId, getByAltText } = render(
  //     <Header heading="foo" description="bar" />
  //   );

  //   const container = getByTestId('header');
  //   expect(container.tagName).toBe('DIV');
  //   expect(container.childElementCount).toBe(3);

  //   const logo = getByAltText('logo');
  //   expect(logo.tagName).toBe('IMG');

  //   const header = getByTestId('heading');
  //   expect(header.tagName).toBe('P');
  //   expect(header.textContent).toBe('foo');

  //   const description = getByTestId('description');
  //   expect(description.tagName).toBe('DIV');
  //   expect(description.textContent).toBe('bar');
  // });

  // it('Should match snapshot with heading and description text', () => {
  //   const tree = create(<Header heading="foo" descriptions="bar" />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
