import React from "react";
import Header from "./Header";
import QuestionArea from "./QuestionArea";
import IndexArea from "./IndexArea";
import { useState } from "react";
import dummyData from "../DummyDatas";
import { HStack, VStack } from "@chakra-ui/react";
import Details from "./Details";

const Main = () => {
  const [index, setIndex] = useState(1);
  const [detailsflag, setDetailsFlag] = useState(false);
  const data = dummyData;

  //indexの状態を変更する関数
  return (
    <>
      <Header />
      <IndexArea index={index} data={data} setIndex={setIndex} />

      <Details detailsflag={detailsflag} setDetailsFlag={setDetailsFlag} />

      <QuestionArea index={index} data={data} setDetailsFlag={setDetailsFlag} />
    </>
  );
};

export default Main;
