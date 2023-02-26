import React from "react";
import { useState, useEffect } from "react";
import "../css/UserInfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [infoFlag, setInfoFlag] = useState(false);

  let navigate = useNavigate();

  var nickname = localStorage.getItem("nickname");
  var email = localStorage.getItem("email");
  const setUserInfo = () => {
    if (nickname != null && email != null) {
      setInfoFlag(true);
      setName(nickname);
      setMail(email);
    } else {
      // setName(null);
      // setMail(null);
      setInfoFlag(false);
    }
    console.log(nickname, email, infoFlag);
  };

  useEffect(async () => {
    await setUserInfo();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("nickname");
    window.location.reload();
  };

  return (
    <>
      <div className="infomation">
        {infoFlag ? (
          <>
            <div className="info_div">
              <p className="info_child">{name}</p>
              <p className="info_child">{mail}</p>
            </div>
            <div className="hover_display">
              <h4 className="hover_label">ユーザーネーム</h4>
              <h3 className="hover_element">{name}</h3>
              <h4 className="hover_label">メールアドレス</h4>
              <h3 className="hover_element">{mail}</h3>
              <input
                type="button"
                className="route_from_info_button"
                value="ログアウト"
                onClick={handleLogout}
              />
            </div>
          </>
        ) : (
          <>
            <div className="info_div">
              <p className="info_child">Guest</p>
              <p className="info_child">Guest@mail.com</p>
            </div>
            <div className="hover_display">
              <h4 className="hover_label">ユーザーネーム</h4>
              <h3 className="hover_element">Guest</h3>
              <h4 className="hover_label">メールアドレス</h4>
              <h3 className="hover_element">Guest@mail.com</h3>
              <input
                type="button"
                className="route_from_info_button"
                value="ログイン"
                onClick={handleLogin}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserInfo;
