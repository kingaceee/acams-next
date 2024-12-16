import { useState } from 'react';

function useBoolean(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  const setTrue = () => setValue(true);

  const setFalse = () => setValue(false);

  const toggle = () => setValue(prev => !prev);

  return { value, setTrue, setFalse, toggle };
}

export default useBoolean;
