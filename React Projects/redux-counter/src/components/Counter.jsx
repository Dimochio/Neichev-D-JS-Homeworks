import { useDispatch } from "react-redux";
import { decrement, increment } from "../reduxSlices/counterSlice";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Counter;
