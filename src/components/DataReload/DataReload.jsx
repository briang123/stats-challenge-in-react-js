import React from 'react';
import { Button } from './../index';
import styled from 'styled-components';

export const DataReload = ({ onClick }) => {
  return (
    <FormContainer data-testid="reload-container">
      <ReloadContainer>
        <Button
          testid="btn-1234"
          text="Reload JSON-1234 Data"
          btnType="default"
          onClick={(e) => onClick(e, 1234)}
        />
        <Button
          testid="btn-4321"
          text="Reload JSON-4321 Data"
          btnType="default"
          onClick={(e) => onClick(e, 4321)}
        />
      </ReloadContainer>
    </FormContainer>
  );
};

export default DataReload;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondarybg);
`;

const ReloadContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  min-width: 50vw;
  height: 125px;
  & button {
    margin: 10px;
  }
  @media (min-width: 600px) {
    min-width: 55vw;
    & button {
      margin: 0px;
    }
  }
`;
