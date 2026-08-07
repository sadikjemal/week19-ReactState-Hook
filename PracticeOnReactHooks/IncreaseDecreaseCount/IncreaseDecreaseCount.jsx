import { useState } from "react";
import "./IncreaseDecreaseCount.css";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
     <div className="titlee">
       <h1 className="title">
        Initial click count: {count}
      </h1>
     </div>

      <div className="buttons">
        <button onClick={reset}>
          Reset count
        </button>

        <button onClick={increase}>
          Increase count
        </button>

        <button onClick={decrease}>
          Decrease count
        </button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;