import React from 'react';
import { Tile } from '../index';
import styled from 'styled-components';

export const Dashboard = ({ mean, median, stdDev, mode }) => {
  return (
    <DashboardContainer data-testid="tile-container">
      <Tile value={mean} title="Mean" />
      <Tile value={median} title="Median" />
      <Tile value={stdDev} title="Std Deviation" />
      <Tile value={mode} title="Mode" />
    </DashboardContainer>
  );
};

export default Dashboard;

export const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 400px;
  min-width: 100vw;
  width: 100vw;
  align-items: center;
  justify-content: space-evenly;
  color: var(--lightcolor);
  background-color: var(--primarybg);
`;
