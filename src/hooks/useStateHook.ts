import { useState } from 'react';

function useStateHook<T>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  return {
    state,
    setState
  };
}

export default useStateHook;