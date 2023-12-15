import { useState } from 'react';

export const useCounter = ({ initialValue = 0 }: Props = {}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return { count, increment, decrement };
};

type Props = {
  initialValue?: number;
};
