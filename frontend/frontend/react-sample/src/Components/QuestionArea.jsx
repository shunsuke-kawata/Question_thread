import React from "react";
import Question from "./Question";
import "../css/QuestionArea.css";

const QuestionArea = ({ index, data, setQuestionOrDetail }) => {
  //配列の長さを保持する

  var display_head = (index - 1) * 10;
  var display_tail = display_head + 10;
  if (display_tail > data.length) {
    display_tail = data.length;
  }

  const display_data = data.slice(display_head, display_tail);
  //処理を記述
  //データがない時表示なし

  if (!display_data) return <></>;
  const map_data = display_data.map((datum) => (
    <Question
      {...datum}
      key={datum.id}
      setQuestionOrDetail={setQuestionOrDetail}
    />
  ));

  return <div id="mapdata">{map_data}</div>;
};

export default QuestionArea;
