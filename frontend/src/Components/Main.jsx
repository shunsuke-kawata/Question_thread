import React from "react";
import QuestionArea from "./QuestionArea";
import { dummyData, dummyUser } from "../DummyDatas";
import Details from "./Details";
import { useState, useEffect } from "react";
import axios from "axios";
import Common from "./Common";

//バックエンドにgetリクエストを送り、質問一覧を取得する

const Main = () => {
  const [questionOrDetail, setQuestionOrDetail] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState("none");
  const [allData, setAllData] = useState([]);
  const data = dummyData;

  const getAllQuestion = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_HOST_URL + "/getData")
        .then((response) => {
          //表示するデータを作成
          console.log(typeof response.data);
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

  if (!allData) return <p>Loading</p>;
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
          data={allData}
          setClickedQuestion={setClickedQuestion}
          setQuestionOrDetail={setQuestionOrDetail}
        />
      )}
    </>
  );
};

export default Main;
