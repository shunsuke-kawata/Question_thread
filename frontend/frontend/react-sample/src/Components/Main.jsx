import React from "react";
import QuestionArea from "./QuestionArea";
import { dummyData, dummyUser } from "../DummyDatas";
import Details from "./Details";
import { useState } from "react";
import Common from "./Common";

const Main = () => {
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState("none");
  const data = dummyData;
  return (
    <>
      <Common dummyUser={dummyUser} />
      {questionOrDetail ? (
        <Details
          clickedQuestion={clickedQuestion}
          setClickedQuestion={setClickedQuestion}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      ) : (
        <QuestionArea
          data={data}
          setClickedQuestion={setClickedQuestion}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      )}
    </>
  );
};

export default Main;
