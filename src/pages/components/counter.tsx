import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "../../redux/Counter/actions";

const useCounter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const counterAction = React.useCallback(
    (action: string) => () => {
      switch (action) {
        case "increment":
          dispatch(increment());
          break;
        case "decrement":
          dispatch(decrement());
          break;
        case "reset":
          dispatch(reset());
          break;
      }
    },
    []
  );
  return { count, counterAction };
};

const Counter: React.FC<{}> = () => {
  const { count, counterAction } = useCounter();

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={counterAction("increment")}>+1</button>
      <button onClick={counterAction("decrement")}>-1</button>
      <button onClick={counterAction("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
