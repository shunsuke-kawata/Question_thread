import React from "react";
import QuestionArea from "./QuestionArea";
import { dummyUser } from "../DummyDatas";
import Details from "./Details";
import { useState, useEffect } from "react";
import axios from "axios";
import Common from "./Common";

const Main = () => {
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState({});
  const [allData, setAllData] = useState([]);
  const [comments, setComments] = useState([]);

  const getAllQuestion = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_HOST_URL + "/getData")
        .then((response) => {
          //表示するデータを作成
          setAllData(response.data);
        });
    } catch {
      console.log("get data failed");
    }
  };
  //mainコンポーネントが呼び出されるときに実行される;
  useEffect(async () => {
    await getAllQuestion();
  }, []);

  if (!allData) return <p>Loading...</p>;
  return (
    <>
      <Common dummyUser={dummyUser} />
      {questionOrDetail ? (
        <Details
          comments={comments}
          clickedQuestion={clickedQuestion}
          setClickedQuestion={setClickedQuestion}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      ) : (
        <QuestionArea
          data={allData}
          setComments={setComments}
          setClickedQuestion={setClickedQuestion}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      )}
    </>
  );
};

export default Main;
