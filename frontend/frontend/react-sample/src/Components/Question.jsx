import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body }) => {
  const transition = () => {
    console.log(id);
  };
  return (
    <div className="question_body" onClick={transition}>
      <h4>
        {id},{title}
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Question;
