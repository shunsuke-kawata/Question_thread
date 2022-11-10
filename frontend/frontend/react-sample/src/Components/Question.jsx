import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body, setDetailsFlag }) => {
  const showDetails = () => {
    setDetailsFlag(true);
  };
  return (
    <div className="question_body" onClick={showDetails}>
      <h4>
        {id},{title}
      </h4>
      <p>{body}</p>
    </div>
  );
};

export default Question;
