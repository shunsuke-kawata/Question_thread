import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body }) => {
  return (
    <div className="question_body">
      <h4>
        {id},{title}
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Question;
