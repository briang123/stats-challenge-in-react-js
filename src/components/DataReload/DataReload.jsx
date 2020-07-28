import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './../index';
import { DATASETS } from '../../common/constants';
import styled from 'styled-components';

export const DataReload = ({ onClick }) => {
  return (
    <FormContainer data-testid="reload-container">
      <ReloadContainer>
        {DATASETS.map((item) => (
          <Button
            key={item.onClickArg}
            testid={`btn-${item.onClickArg}`}
            text={item.buttonText}
            btnType="default"
            onClick={(e) => onClick(e, item.onClickArg)}
          />
        ))}
      </ReloadContainer>
    </FormContainer>
  );
};

DataReload.propTypes = {
  onClick: PropTypes.func.isRequired,
};

DataReload.defaultProps = {
  onClick: () => null,
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
