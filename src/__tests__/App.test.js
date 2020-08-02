import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { cleanup, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useDataFetch } from '../hooks';
import axios from 'axios';
import App from '../App';

describe('<App />', () => {
  const mockAxios = new MockAdapter(axios);

  afterEach(() => {
    cleanup();
    mockAxios.reset();
  });

  console.error = jest.fn();

  it('Should render the page', () => {
    render(<App />);
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Body component without props should show dashboard without the data', () => {
    const { getByTestId } = render(<App />);

    const bodyContainer = getByTestId('container');
    expect(bodyContainer.tagName).toBe('DIV');
    expect(bodyContainer.childElementCount).toBe(1);
  });

  it('Should fetch data using axios and return the correct results', async () => {
    mockAxios.onGet('/path').reply(200, {
      data: [1, 2],
    });
    const { result, waitForNextUpdate } = renderHook(() => useDataFetch('/path', []));
    const [initialResponse] = result.current;
    expect(initialResponse.data).toEqual([]);
    expect(initialResponse.isLoading).toBe(true);
    expect(initialResponse.isError).toBe(false);
    expect(initialResponse.error).toBeNull();
    expect(initialResponse.url).toEqual('/path');

    await waitForNextUpdate();

    const [dataLoadResponse] = result.current;
    expect(dataLoadResponse.data.data).toEqual([1, 2]);
    expect(dataLoadResponse.isLoading).toBe(false);
    expect(dataLoadResponse.isError).toBe(false);
    expect(dataLoadResponse.error).toBeNull();
    expect(dataLoadResponse.url).toEqual('/path');
  });
});
