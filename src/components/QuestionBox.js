import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          disabled={toggle}
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
            setToggle(true);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
