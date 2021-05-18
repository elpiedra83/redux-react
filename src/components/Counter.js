import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = (amount) => {
    dispatch(counterActions.increase(amount));
    // dispatch({ type: "increase", amount });
  };
  const decreaseHandler = (amount) => {
    dispatch(counterActions.decrease(amount));
    // dispatch({ type: "decrease", amount });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: "toggle" });
  };

  const increment = 10;

  const buttons = (
    <>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={() => increaseHandler(1)}>Increment</button>
        <button onClick={() => increaseHandler(increment)}>
          Increase by {increment}
        </button>
        <button onClick={() => decreaseHandler(1)}>Decrement</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && buttons}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
