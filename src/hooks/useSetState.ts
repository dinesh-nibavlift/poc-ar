import { useState } from 'react';

const useSetState = <T extends object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const updateState = (newState: Partial<T>) => {
    setState((prevState: T) => {
      return { ...prevState, ...newState };
    });
  };

  return [state, updateState] as const;
};

export default useSetState;
