import React from "react";
import { Link } from "react-router-dom";
import "../css/Menubar.css";

const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <h3 id="menutitle">Actions</h3>
        <Link className="links" to="/newQuestion">
          質問する
        </Link>
        <br />
        <Link className="links" to="/">
          ホーム
        </Link>
        <br />
        <Link className="links" to="/signin">
          サインイン
        </Link>
        <br />
        <Link className="links" to="/login">
          ログイン
        </Link>
        <br />
        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
