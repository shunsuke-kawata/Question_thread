import React from "react";
import axios from "axios";
import { useState } from "react";
import "../css/Question.css";

const Question = ({
  datum,
  setComments,
  setClickedQuestion,
  setQuestionOrDetail,
}) => {
  const clickHandle = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_HOST_URL + "/getComments/" + datum.ID)
        .then((response) => {
          //表示するデータを作成
          setComments(response);
        });
    } catch {
      console.log("get data failed");
    }
    setQuestionOrDetail(true);
    setClickedQuestion(datum);

    console.log(datum.ID);
  };
  return (
    <div className="question_body" onClick={() => clickHandle()}>
      <div className="titleDiv">
        <h3 className="questionElements">{datum.Title}</h3>
      </div>
      <div className="bodyDiv">
        <p className="questionElements">{datum.Body}</p>
      </div>
      <div className="infoDiv">
        <p>
          作成時刻：{datum.CreatedAt}　回答数：{datum.Comments}
        </p>
      </div>
    </div>
  );
};

export default Question;
