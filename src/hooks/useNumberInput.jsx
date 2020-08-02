import { stripNonDigit, isEnterKey } from '../common/utils';

export const useNumberInput = ({ setValue = () => null, onSubmit = () => null }) => {
  const onKeyUp = (e) => {
    e.currentTarget.value = stripNonDigit(e.target.value);
  };

  const onChange = (e) => {
    const numValue = parseInt(e.target.value);
    setValue(isNaN(numValue) ? null : numValue);
  };

  const onKeyPress = (e) => {
    if (isEnterKey(e) && e.target.value !== '') {
      onSubmit(e);
    }
  };

  return [onKeyUp, onKeyPress, onChange];
};

export default useNumberInput;
