import React from 'react';
import { useInput } from '../../hooks';
import styled from 'styled-components';

const Input = (
  {
    testid,
    tabIndex = -1,
    placeholder = '',
    value,
    autoFocus = false,
    setValue = () => null,
    onSubmit = () => null,
  },
  ref
) => {
  const [onKeyUp, onKeyPress, onChange] = useInput({
    setValue,
    onSubmit,
  });

  return (
    <StyledInput
      ref={ref}
      data-testid={testid}
      tabIndex={tabIndex}
      type="text"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
    />
  );
};

export default React.forwardRef(Input);

const StyledInput = styled.input`
  height: 75px;
  width: 70%;
  border-radius: 20px 0px 0px 20px;
  border: none;
  font-size: calc(20px + 2vmin);
  text-align: center;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: var(--lgtpink);
  }
  ::-moz-placeholder {
    color: var(--lgtpink);
  }
  :-ms-input-placeholder {
    color: var(--lgtpink);
  }
  :-moz-placeholder {
    color: var(--lgtpink);
  }
`;
