import React, { useState } from "react";

export default function () {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("black");

  const area = () => {
    if (!base || !height || base < 0 || height < 0) {
      alert("Invalid lengths");
      setOutput("Invalid lengths");
      return;
    }
    setOutput(
      `The area of the triangle is ${((0.5 * base * height) ^ 0.5).toFixed(2)}`
    );
    setColor("red");
    return;
  };

  return (
    <div>
      <h1>{"Calculate Area of a triangle"}</h1>

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
        <button onClick={area}>Calculate hypotenuse</button>
      </div>

      <h3 style={{ color }}>{output}</h3>

      <h2>Area formula</h2>
      <h3>1/2 * base * height</h3>
    </div>
  );
}
