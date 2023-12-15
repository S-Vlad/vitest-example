export const CounterWithProps: React.FC<Props> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>

      {onIncrement && <button onClick={onIncrement}>Increment</button>}
      {onDecrement && <button onClick={onDecrement}>Decrement</button>}
    </div>
  );
};

type Props = {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
};
