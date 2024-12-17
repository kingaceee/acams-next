import { useState, useCallback } from 'react';

function useBoolean(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => setValue(true), []);

  const setFalse = useCallback(() => setValue(false), []);

  const toggle = useCallback(() => setValue(prev => !prev), []);

  return { value, setTrue, setFalse, toggle } as const;
}

export default useBoolean;
