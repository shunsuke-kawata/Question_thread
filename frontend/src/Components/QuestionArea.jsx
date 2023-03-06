import React from "react";
import Question from "./Question";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  console.log(display_data.length);
  //処理を記述
  //データがない時表示なし

  if (!data) return <></>;
  //質問がまだ投稿されていないとき
  if (data.length === 0) {
    return (
      <>
        <IndexArea index={index} data={data} setIndex={setIndex} />
        <div id="noQuestionDiv">
          <Link id="linkUrl" to="/newQuestion">
            質問を追加する
          </Link>
          <p>まだ質問が投稿されていません</p>
        </div>
      </>
    );
  }
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
