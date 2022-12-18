import React from "react";
import Question from "./Question";
import { useState } from "react";
import "../css/QuestionArea.css";
import IndexArea from "./IndexArea";

const QuestionArea = ({
  data,
  setComments,
  setClickedQuestion,
  setQuestionOrDetail,
}) => {
  //配列の長さを保持する
  const [index, setIndex] = useState(1);
  var display_head = (index - 1) * 10;
  var display_tail = display_head + 10;
  if (display_tail > data.length) {
    display_tail = data.length;
  }

  const display_data = data.slice(display_head, display_tail);
  //処理を記述
  //データがない時表示なし

  // for (var i = 0; i < display_data.length; i++) {
  //   console.log(display_data[i]);
  // }

  if (!data) return <></>;
  const map_data = display_data.map((datum) => (
    <Question
      datum={datum}
      key={datum.ID}
      setComments={setComments}
      setQuestionOrDetail={setQuestionOrDetail}
      setClickedQuestion={setClickedQuestion}
    />
  ));

  return (
    <>
      <IndexArea index={index} data={data} setIndex={setIndex} />
      <div id="mapdata">{map_data}</div>
    </>
  );
};

export default QuestionArea;
