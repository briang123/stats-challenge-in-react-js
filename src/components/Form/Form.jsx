import React, { useState, useRef } from 'react';
import { Button } from './../index';
import Input from '../Input/Input';
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
        <Input
          testid="datapoint"
          ref={inputRef}
          tabIndex={0}
          placeholder="Enter a number"
          value={dataValue}
          autoFocus={true}
          setValue={setDataValue}
          onSubmit={handleSubmit}
        />
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

export default Form;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  min-width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: var(--cyan);
`;

const InputButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 80vw;
  @media (min-width: 600px) {
    min-width: 40vw;
  }
`;
