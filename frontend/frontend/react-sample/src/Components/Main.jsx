import React from "react";
import Header from "./Header";
import QuestionArea from "./QuestionArea";
import IndexArea from "./IndexArea";
import { useState } from "react";
import dummyData from "../DummyDatas";

const Main = () => {
  const [index, setIndex] = useState(1);
  const data = dummyData;

  //indexの状態を変更する関数
  return (
    <>
      <Header />
      <IndexArea index={index} data={data} setIndex={setIndex} />
      <QuestionArea index={index} data={data} />
    </>
  );
};

export default Main;
