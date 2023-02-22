import React from "react";
import { useState, useEffect } from "react";
import "../css/UserInfo.css";

const UserInfo = () => {
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [infoFlag, setInfoFlag] = useState(false);

  var nickname = localStorage.getItem("nickname");
  var email = localStorage.getItem("email");
  const setUserInfo = () => {
    if (nickname != null && email != null) {
      setInfoFlag(true);
      setName(nickname);
      setMail(email);
    } else {
      setName(null);
      setMail(null);
      setInfoFlag(false);
    }
    console.log(nickname, email, infoFlag);
  };

  useEffect(() => {
    setUserInfo();
  }, []);

  return (
    <>
      <div className="infomation">
        {infoFlag ? (
          <>
            <p className="info_child">{name}</p>
            <p className="info_child">{mail}</p>
          </>
        ) : (
          <>
            <p className="info_child">Guest</p>
            <p className="info_child">Guest@mail.com</p>
          </>
        )}
      </div>
    </>
  );
};

export default UserInfo;
