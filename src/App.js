import React, { useState } from "react";

import IsTriangle from "./components/IsTriangle";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/hypotenuse";
import Area from "./components/area";

import "./styles.css";

function App() {
  const [tab, setTab] = useState("isTriangle");

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h1>Fun with triangles △</h1>
        <div>
          <button onClick={() => setTab("isTriangle")}>Is Triangle</button>
          <button onClick={() => setTab("quiz")}>Quiz</button>
          <button onClick={() => setTab("hypotenuse")}>Hypotenuse</button>
          <button onClick={() => setTab("area")}>Area of triangle</button>
        </div>
      </div>
      {tab === "isTriangle" && <IsTriangle />}
      {tab === "quiz" && <Quiz />}
      {tab === "hypotenuse" && <Hypotenuse />}
      {tab === "area" && <Area />}
    </div>
  );
}

export default App;
