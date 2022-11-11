import React from "react";
import "../css/Menubar.css";
const Menubar = ({ setMenubarFlag }) => {
  return (
    <>
      <div className="menubar">
        <p>表示</p>
        <button onClick={() => setMenubarFlag(false)}>閉じる</button>
      </div>
    </>
  );
};

export default Menubar;
