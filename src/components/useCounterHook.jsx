import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(2);
  //token: git remote add origin https://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@github.com/walmerHerrer/gifexpertFinal.git

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(3)} className="btn btn-primary">
        +3
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
