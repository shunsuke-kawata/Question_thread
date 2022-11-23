import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import "../css/Menubar.css";

const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <h3 id="menutitle">Actions</h3>
        <Link className="links" to="/newQuestion">
          質問を追加する
        </Link>
        <br />
        <Link className="links" to="/">
          ホーム
        </Link>
        <br />
        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
