import { stripNonDigit, isEnterKey } from '../common/utils';

export const useInput = ({ setValue = () => null, onSubmit = () => null }) => {
  const onKeyUp = (e) => {
    e.currentTarget.value = stripNonDigit(e.target.value);
  };

  const onChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const onKeyPress = (e) => {
    if (isEnterKey(e) && e.target.value !== '') {
      onSubmit(e);
      return true;
    }
    return false;
  };

  return [onKeyUp, onKeyPress, onChange];
};

export default useInput;
