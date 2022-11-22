import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body, setQuestionOrDetail }) => {
  const clickHandle = () => {
    setQuestionOrDetail(true);
    console.log(id, title, body);
  };
  return (
    <div className="question_body" onClick={() => clickHandle()}>
      <h4>{id}</h4>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default Question;
