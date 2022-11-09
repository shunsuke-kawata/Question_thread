import React from "react";
import dummyData from "../DummyDatas";
import Question from "./Question";
import QuestionAreaHeader from "./QuestionAreaHeader";

const QuestionArea = ({ index }) => {
  const datas = dummyData;
  //配列の長さを保持する

  var tail = datas.length % (10 * index);
  if (tail === 0) {
    tail = index * 10;
  }
  const onClickIndex = (i) => {
    i++;
  };
  const display_datas = datas.slice((index - 1) * 10, tail);
  console.log(index);
  console.log(tail);
  //処理を記述
  //データがない時表示なし

  if (!display_datas) return <></>;

  return display_datas.map((data) => <Question {...data} key={data.id} />);
};

export default QuestionArea;
