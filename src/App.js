import React, { useEffect } from 'react';
import { useDataFetch } from './hooks/';
import {
  DATASET_BASELINE_URL,
  DATASET_1,
  DATASET_2,
  DASHBOARD_TITLE,
  DASHBOARD_DESC,
} from './common/constants';
import { Header, Body } from './components';
import styled from 'styled-components';
import './theme/nautical.css';

const App = () => {
  const [
    { data: response, isLoading, isError, error, url },
    setUrl,
  ] = useDataFetch(DATASET_1.url, []);

  const dataSet = response?.data;

  const onReload = (e, dataFile) => {
    e.preventDefault();
    console.log('onReload', dataSet, url, `${DATASET_BASELINE_URL}${dataFile}`);

    setUrl(`${DATASET_BASELINE_URL}${dataFile}`);

    // setUrl(dataFile === DATASET_1.onClickArg ? DATASET_1.url : DATASET_2.url);
  };

  useEffect(() => {
    console.log('useEffect', dataSet, url);
  });

  console.log({ response, dataSet, isLoading, isError, error, url });
  return (
    <Container>
      <Header heading={DASHBOARD_TITLE} description={DASHBOARD_DESC} />
      {dataSet && <Body key={url} data={dataSet} onReload={onReload} />}
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: var(--secondarybg);
  text-align: center;
`;
