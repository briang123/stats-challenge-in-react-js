import React from 'react';
import { DataReload, Form, Dashboard } from '../';
import { useStatistics } from '../../hooks';
import styled from 'styled-components';

export const Body = ({ data, onReload }) => {
  const { dataSet, mean, median, mode, setDataSet, stdDev } = useStatistics(data);

  return (
    <BodyContainer data-testid="body-container">
      <Dashboard mean={mean} median={median} stdDev={stdDev} mode={mode} />
      <Form dataSet={dataSet} setDataSet={setDataSet} />
      <DataReload onClick={onReload} />
    </BodyContainer>
  );
};

export const BodyContainer = styled.div`
  min-height: calc(100vh - 250px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  background-color: var(--white);
`;
