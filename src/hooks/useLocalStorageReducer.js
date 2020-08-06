import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  // use useEffect to update localStorage when state changes
  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [key, state]
  );

  return [state, dispatch];
}

export default useLocalStorageReducer;
