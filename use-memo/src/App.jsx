import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(1);

  const expensiveOp = useMemo(() => {
    console.log("number is changing");
    return number * 10;
  }, [number]); // ✅ Now it updates when 'number' changes

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>

      <h2>Value: {expensiveOp}</h2>
      <button onClick={() => setNumber((number) => number + 1)}>
        Change Number
      </button>
    </>
  );
}

export default App;
