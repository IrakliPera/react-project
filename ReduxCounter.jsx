import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counterSlice";

function ReduxCounter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="panel">
      <h2>5. Redux Toolkit Counter</h2>
      <p>Redux-ის მნიშვნელობა: <strong>{value}</strong></p>
      <div className="button-row">
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button className="secondary" onClick={() => dispatch(decrement())}>Decrement −</button>
        <button className="danger" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
}
export default ReduxCounter;