import React from "react";
import Header from "./Header";
import Menubar from "./Menubar";
import { Drawer } from "@material-ui/core";
import { useState } from "react";

const Common = () => {
  const [menubarflag, setMenubarFlag] = useState(false);
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
