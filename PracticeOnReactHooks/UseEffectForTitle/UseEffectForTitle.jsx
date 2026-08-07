import { useState, useEffect } from "react";
import "./UseEffectFoTitle.css";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);


  // useEffect(() => {
  //   alert("Component is mounted");
  // }, []);

  useEffect(() => {
    document.title = `TitleCount: ${count}`;
  },[count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <button className="click-button" onClick={handleClick}>
        Click here
      </button>

      <h1 className="count-display">
        Count displayer: {count}
      </h1>
    </div>
  );
}

export default UseEffectForTitle;