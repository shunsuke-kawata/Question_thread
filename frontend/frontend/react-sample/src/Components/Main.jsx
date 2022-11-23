import React from "react";
import QuestionArea from "./QuestionArea";
import dummyData from "../DummyDatas";
import Details from "./Details";
import { useState } from "react";
import Common from "./Common";

const Main = () => {
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const data = dummyData;

  return (
    <>
      <Common />
      {/* 以下二つのどちらかを表示する */}
      {questionOrDetail ? (
        <Details setQuestionOrDetail={setQuestionOrDetail} />
      ) : (
        <QuestionArea data={data} setQuestionOrDetail={setQuestionOrDetail} />
      )}
    </>
  );
};

export default Main;
