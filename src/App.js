import React from 'react';
import { useDataFetch } from './hooks/';
import { DATA1234_URL, DATA4321_URL, DASHBOARD_TITLE } from './common/constants';
import { Header, Body } from './components';
import styled from 'styled-components';
// import './theme/tandem.css';
import './theme/nautical.css';

const App = () => {
  const [{ data: response, isLoading, isError, error, url }, setUrl] = useDataFetch(
    DATA1234_URL,
    []
  );

  const dataSet = response?.data;

  const onReload = (e, dataFile) => {
    e.preventDefault();
    setUrl(dataFile === 1234 ? DATA1234_URL : DATA4321_URL);
  };

  return (
    <Container>
      <Header heading={DASHBOARD_TITLE} />
      {dataSet && <Body key={url} data={dataSet} onReload={onReload} />}
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: var(--secondarybg);
  text-align: center;
`;
