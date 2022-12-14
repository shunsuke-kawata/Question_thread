import React from "react";
import { Link } from "react-router-dom";
import "../css/Menubar.css";

const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <span className="batsu" onClick={() => setMenubarFlag(false)}>
          ×
        </span>
        <h3 id="menutitle">Actions</h3>
        <Link className="links" to="/">
          ホーム
        </Link>
        <Link className="links" to="/newQuestion">
          質問する
        </Link>
        <Link className="links" to="/signup">
          サインアップ
        </Link>
        <Link className="links" to="/login">
          ログイン
        </Link>
      </div>
    </>
  );
};

export default Menubar;
