import React from "react";
import "../css/Question.css";

const Question = ({ datum, setClickedQuestion, setQuestionOrDetail }) => {
  const clickHandle = () => {
    setQuestionOrDetail(true);
    setClickedQuestion(datum.ID);
    console.log(datum.ID);
  };
  return (
    <div className="question_body" onClick={() => clickHandle()}>
      <div className="titleDiv">
        <h3 className="questionElements">・{datum.Title}</h3>
      </div>
      <div className="bodyDiv">
        <p className="questionElements">{datum.Body}</p>
      </div>
      <div className="infoDiv">
        <p>回答数：{datum.answerCount}</p>
      </div>
    </div>
  );
};

export default Question;
