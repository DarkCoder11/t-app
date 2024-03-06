import { ChangeEvent, useState } from 'react';
import debounce from 'lodash.debounce';

import type { TUseInput } from './types';

const useInput = ({ initialValue }: TUseInput) => {
  const [value, setValue] = useState<string>(initialValue);

  const [debouncedValue, setDebouncedValue] = useState<string>(initialValue);

  const debouncedHandleChange = debounce((newValue: string) => {
    setDebouncedValue(newValue);
  }, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(event.target.value);
    debouncedHandleChange(newValue);
  };

  return {
    value,
    handleChange,
    debouncedValue,
  };
};

export default useInput;
