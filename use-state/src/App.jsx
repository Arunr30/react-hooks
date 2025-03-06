import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Effect from "./components/use-effect";

function App() {
  const [car, setCar] = useState({
    brand: "bmw",
    model: "x series",
    year: 2002,
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  return (
    <div>
      <h1>my car {car.brand}</h1>
      <p>
        model is {car.model}, year is {car.year}, color is {car.color}
      </p>
      <button onClick={changeColor}>change color</button>
    </div>
  );
}

export default App;
