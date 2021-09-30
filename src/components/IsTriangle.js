import React, { useState } from "react";

export default function () {
  const [angle1, setAngle1] = useState(0);
  const [angle2, setAngle2] = useState(0);
  const [angle3, setAngle3] = useState(0);
  const [output, setOutput] = useState("");
  const [color, setColor] = useState("black");

  const isTriangle = () => {
    if (!angle1 || !angle2 || !angle3) {
      alert("Some input was empty or set to 0");
      setOutput("Some input was empty or set to 0");
      return;
    }
    if (angle1 + angle2 + angle3 === 180) {
      setOutput("Valid triangle!");
      setColor("green");
      return;
    }
    setOutput("Invalid angles!");
    setColor("red");
    return;
  };

  return (
    <div>
      <h1>{"Is triangle?"}</h1>

      <h3>Angle 1</h3>
      <input
        value={angle1}
        onChange={(e) => setAngle1(parseInt(e.target.value))}
        type="number"
      />

      <h3>Angle 2</h3>
      <input
        value={angle2}
        onChange={(e) => setAngle2(parseInt(e.target.value))}
        type="number"
      />

      <h3>Angle 3</h3>
      <input
        value={angle3}
        onChange={(e) => setAngle3(parseInt(e.target.value))}
        type="number"
      />

      <div>
        <button onClick={isTriangle}>Is triangle?</button>
      </div>

      <h3 style={{ color }}>{output}</h3>
    </div>
  );
}
