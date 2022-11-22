import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
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
        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
