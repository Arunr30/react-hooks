import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const inputElem = useRef(null);

  const buttonClicked = () => {
    inputElem.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={buttonClicked}>Click here!!!</button>
    </>
  );
}

export default App;
