import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from './../index';
import NumberInput from '../NumberInput/NumberInput';
import styled from 'styled-components';

export const Form = ({ setDataSet, dataSet }) => {
  const [dataValue, setDataValue] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataSet([...dataSet, dataValue]);
    setDataValue('');
    inputRef.current.focus();
  };

  return (
    <FormContainer data-testid="form-container">
      <InputButtonGroup>
        <div>
          <NumberInput
            testid="datapoint"
            ref={inputRef}
            tabIndex={0}
            placeholder="Enter a number"
            value={dataValue}
            autoFocus={true}
            setValue={setDataValue}
            onSubmit={handleSubmit}
          />
        </div>
        <Button
          testid="submit-btn"
          onClick={handleSubmit}
          text="Submit"
          btnType="submit"
          disabled={!dataValue}
        />
      </InputButtonGroup>
    </FormContainer>
  );
};

Form.propTypes = {
  setDataSet: PropTypes.func.isRequired,
  dataSet: PropTypes.array.isRequired,
};

Form.defaultProps = {
  setDataSet: () => null,
  dataSet: [],
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondarybg);
`;

const InputButtonGroup = styled.div`
  min-width: 80vw;
  display: table;
  border-collapse: collapse;
  & > div {
    padding: 0px;
    width: 100%;
    display: table-cell;
    vertical-align: middle; /* needed for Safari */
  }
  & input {
    border: 0;
    display: block;
    width: 100%;
    min-height: 100%;
    height: 76px;
  }
  & button {
    min-width: 125px;
    width: 100%;
    height: 78px;
  }

  @media (min-width: 600px) {
    min-width: 40vw;
    & button {
      min-width: 250px;
      width: 100%;
      height: 78px;
    }
  }
`;
