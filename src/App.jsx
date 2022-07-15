import react, { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState();
  const [msg2, setMsg2] = useState();

  const increase = () => {
    if (counter >= 5) {
      setMsg2("Value Is Greater Than 5");
    } else {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter < 1) {
      setMsg("Value Is Less Than 0");
    } else {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    if (counter <= 4) {
      setMsg2("");
    }
  }, [counter]);
  useEffect(() => {
    if (counter > 0) {
      setMsg("");
    }
  }, [counter]);
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => increase()}>+</button>
      {counter}
      <button onClick={() => decrease()}>-</button>
      <h3>{msg}</h3>
      <h3>{msg2}</h3>
    </div>
  );
}
