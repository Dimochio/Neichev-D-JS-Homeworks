import "./App.css";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";

function App() {
  const counterRedux = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Redux Counter</h1>
      <h1>{counterRedux}</h1>
      <Counter></Counter>
    </div>
  );
}

export default App;
