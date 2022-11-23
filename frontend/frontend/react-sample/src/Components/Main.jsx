import React from "react";
import Header from "./Header";
import QuestionArea from "./QuestionArea";
import IndexArea from "./IndexArea";
import dummyData from "../DummyDatas";
import Details from "./Details";
import { useState } from "react";
import Common from "./Common";

const Main = () => {
  const [index, setIndex] = useState(1);
  // const [menubarflag, setMenubarFlag] = useState(false);
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const data = dummyData;

  return (
    <>
      <Common />
      <IndexArea index={index} data={data} setIndex={setIndex} />

      {/* 以下二つのどちらかを表示する */}
      {questionOrDetail ? (
        <Details setQuestionOrDetail={setQuestionOrDetail} />
      ) : (
        <QuestionArea
          index={index}
          data={data}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      )}
    </>
  );
};

export default Main;
