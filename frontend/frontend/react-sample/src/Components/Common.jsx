import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import { Drawer } from "@material-ui/core";
import { useState } from "react";

const Common = ({ dummyUser }) => {
  const [menubarflag, setMenubarFlag] = useState(false);
  console.log(dummyUser);
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
    </>
  );
};

export default Common;
