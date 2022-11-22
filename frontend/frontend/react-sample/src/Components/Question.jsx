import React from "react";
import "../css/Question.css";

const Question = ({ id, title, body, setDetailsFlag }) => {
  const clickHandle = () => {
    setDetailsFlag(true);
    console.log(id, body, title);
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
