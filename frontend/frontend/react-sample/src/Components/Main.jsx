import React from "react";
import Header from "./Header";
import QuestionArea from "./QuestionArea";
import { useState } from "react";

const Main = () => {
  const [index, setIndex] = useState(1);

  return (
    <>
      <Header />
      <QuestionArea index={index} />
    </>
  );
};

export default Main;
