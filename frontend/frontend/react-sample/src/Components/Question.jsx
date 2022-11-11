import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body, setDetailsFlag }) => {
  return (
    <div className="question_body" onClick={() => setDetailsFlag(true)}>
      <h4>{id}</h4>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default Question;
