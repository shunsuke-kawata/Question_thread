import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "../css/Menubar.css";
const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <p>Action</p>

        <Link to="/newQuestion">質問を追加する</Link>
        <br />

        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
