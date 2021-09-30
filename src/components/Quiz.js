import { useState } from "react";

export default function () {
  const [answers, setAnswers] = useState(["", ""]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      body:
        "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      options: ["45°", "90°", "60°"],
      answer: "90°"
    },
    {
      body: "If a triangle has an angle of 90 degrees, what is it called?",
      options: ["obtuse", "acute", "right angled"],
      answer: "right angled"
    }
  ];

  const updateAnswers = (index, value) => {
    setAnswers((answers) => {
      answers[index] = value;
      return [...answers];
    });
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < 2; i++) {
      if (answers[i] === questions[i].answer) {
        score += 1;
      }
    }
    setScore(score);
  };

  return (
    <div>
      <h1>Triangles Quiz</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {questions.map((q, index) => (
          <div>
            <p>{q.body}</p>
            {q.options.map((option) => (
              <div>
                <input
                  type="radio"
                  checked={answers[index] === option}
                  onChange={() => updateAnswers(index, option)}
                />
                {option}
              </div>
            ))}
          </div>
        ))}
        <button onClick={calculateScore}>Submit</button>
        <h3>Your score was {score}</h3>
      </form>
    </div>
  );
}
