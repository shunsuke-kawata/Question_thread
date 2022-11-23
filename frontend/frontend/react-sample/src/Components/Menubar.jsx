import React from "react";
import { Link } from "react-router-dom";
import { HStack } from "@mui/material";
import "../css/Menubar.css";

const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <h3 id="menutitle">Actions</h3>
        <Link className="links" to="/">
          ホーム
        </Link>
        <Link className="links" to="/newQuestion">
          質問する
        </Link>
        <Link className="links" to="/signin">
          サインイン
        </Link>
        <Link className="links" to="/login">
          ログイン
        </Link>

        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
