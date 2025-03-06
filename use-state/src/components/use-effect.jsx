import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, [count]);
  return <div>{count}</div>;
};

export default Effect;
