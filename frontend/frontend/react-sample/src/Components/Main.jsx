import React from "react";
import Header from "./Header";
import QuestionArea from "./QuestionArea";
import IndexArea from "./IndexArea";
import dummyData from "../DummyDatas";
import Details from "./Details";
import { useState } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import { Drawer } from "@material-ui/core";
import Menubar from "./Menubar";

const Main = () => {
  const [index, setIndex] = useState(1);
  const [detailsflag, setDetailsFlag] = useState(false);
  const [menubarflag, setMenubarFlag] = useState(false);
  const data = dummyData;

  //indexの状態を変更する関数
  return (
    <>
      <Header setMenubarFlag={setMenubarFlag} />
      <Drawer
        anchor="left"
        open={menubarflag}
        onClose={() => {
          setMenubarFlag(false);
        }}
      >
        <Menubar setMenubarFlag={setMenubarFlag} />
      </Drawer>
      <IndexArea index={index} data={data} setIndex={setIndex} />
      <Details detailsflag={detailsflag} setDetailsFlag={setDetailsFlag} />
      <QuestionArea index={index} data={data} setDetailsFlag={setDetailsFlag} />
    </>
  );
};

export default Main;
