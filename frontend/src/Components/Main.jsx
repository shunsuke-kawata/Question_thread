import React from "react";
import QuestionArea from "./QuestionArea";
import { dummyData, dummyUser } from "../DummyDatas";
import Details from "./Details";
import { useState, useEffect } from "react";
import axios from "axios";
import Common from "./Common";

const Main = () => {
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState("none");
  const data = dummyData;

  //mainコンポーネントが呼び出されるときに実行される
  useEffect(() => {
    try {
      axios
        .get(process.env.REACT_APP_HOST_URL + "/getData")
        .then((response) => console.log(response));
    } catch {
      console.log("error");
    }
  }, []);
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
