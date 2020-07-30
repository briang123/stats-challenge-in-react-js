import React from 'react';
import PropTypes from 'prop-types';
import { DataReload, Form, Dashboard } from '../';
import { useStatistics } from '../../hooks';
import styled from 'styled-components';

export const Body = ({ data, onReload }) => {
  if (!onReload) console.error('Missing onReload event handler');
  const { dataSet, mean, median, mode, setDataSet, stdDev } = useStatistics(data);
  const isValidReloadFunction = onReload && typeof onReload === 'function';
  return (
    <BodyContainer data-testid="body-container">
      <Dashboard data-testid="dashboard" mean={mean} median={median} stdDev={stdDev} mode={mode} />
      <Form data-testid="form" dataSet={dataSet} setDataSet={setDataSet} />
      {isValidReloadFunction && <DataReload data-testid="data-reload" onClick={onReload} />}
    </BodyContainer>
  );
};

Body.propTypes = {
  data: PropTypes.array.isRequired,
  onReload: PropTypes.func.isRequired,
};

Body.defaultProps = {
  data: [],
  onReload: null,
};

export default Body;

export const BodyContainer = styled.div`
  min-height: calc(100vh - 250px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  background-color: var(--lightcolor);
`;
