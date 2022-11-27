import React from "react";
import { dummyUser } from "../DummyDatas";
import "../css/UserInfo.css";

const UserInfo = () => {
  // const [infoFlag, setInfoFlag] = useState(false);

  return (
    <>
      <div className="infomation">
        <p className="info_child">{dummyUser?.mail}</p>
        <p className="info_child">{dummyUser?.nickname}</p>
      </div>
    </>
  );
};

export default UserInfo;
