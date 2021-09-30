import React, { useState } from "react";

export default function () {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("black");

  const hypotenuse = () => {
    if (!base || !height || base < 0 || height < 0) {
      alert("Invalid lengths");
      setOutput("Invalid lengths");
      return;
    }
    const hypotenuse = Math.sqrt(base ** 2 + height ** 2).toFixed(2);
    setOutput(`The length of the hypotenuse is ${hypotenuse}`);
    setColor("green");
    return;
  };

  return (
    <div>
      <h1>{"Calculate Hypotenuse of a triangle"}</h1>

      <h3>Enter base (b)</h3>
      <input
        value={base}
        onChange={(e) => setBase(parseInt(e.target.value))}
        type="number"
      />

      <h3>Enter height (h)</h3>
      <input
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
        type="number"
      />

      <div>
        <button onClick={hypotenuse}>Calculate hypotenuse</button>
      </div>

      <h3 style={{ color }}>{output}</h3>

      <h2>Hypotenuse formula</h2>
      <h3>√(base² + height²)</h3>
    </div>
  );
}
