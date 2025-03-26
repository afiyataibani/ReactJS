import { useDispatch, useSelector } from "react-redux";
import { decrementData, incrementData } from "./redux/actions";

function App() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.count);

  return (
    <>
      <button onClick={() => dispatch(incrementData())}>Increment</button>
      {count}
      <button onClick={() => dispatch(decrementData())}>Decrement</button>
    </>
  );
}

export default App;
