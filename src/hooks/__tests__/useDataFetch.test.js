import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useDataFetch } from '../';

const mockAxios = new MockAdapter(axios);

afterEach(() => {
  mockAxios.reset();
});

console.error = jest.fn();

describe('useDataFetch custom hook', () => {
  it('Should log error if passing invalid props', async () => {
    mockAxios.onGet('/path').reply(200, {
      data: [1, 2],
    });

    const { result, waitForNextUpdate } = renderHook(() => useDataFetch('/different-path', []));
    const [initialResponse] = result.current;
    expect(initialResponse.url).not.toEqual('/path');
    expect(initialResponse.isLoading).toBe(true);
    expect(initialResponse.isError).toBe(false);
    expect(initialResponse.error).toBeNull();

    await waitForNextUpdate();

    const [dataLoadResponse] = result.current;
    expect(dataLoadResponse.data.data).toBeUndefined();
    expect(dataLoadResponse.isLoading).toBe(false);
    expect(dataLoadResponse.isError).toBe(true);
    expect(dataLoadResponse.error).not.toBeNull();
    expect(dataLoadResponse.url).toEqual('/different-path');
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
