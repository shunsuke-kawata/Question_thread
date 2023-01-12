import "../css/Details.css";
import Comment from "./Comment";
import { Button } from "@mui/material";
import { useState } from "react";
import CommentForm from "./CommentForm";

const Details = ({
  comments,
  clickedQuestion,
  setClickedQuestion,
  setQuestionOrDetail,
}) => {
  const clickHandle = () => {
    setClickedQuestion({});
    setQuestionOrDetail(false);
  };

  //コメント追加フォームの表示を制御するステートフック
  const [showFormFlag, setShowFormFlag] = useState(false);

  //コメントデータを一覧表示
  const displayComments = comments.map((comment) => (
    <Comment comment={comment} key={comment.ID} />
  ));

  //エラーの場合空タグを表示する
  if (clickedQuestion === {}) {
    console.log("hgjkfaseprfgnbkmx");
    return <></>;
  }

  return (
    <>
      <div id="detailDiv">
        <div className="titleDiv">
          <h1 id="questionTitle">{clickedQuestion.Title}</h1>
        </div>
        <div className="bodyDiv">
          <h3>{clickedQuestion.Body}</h3>
        </div>
        <div className="infoDiv">
          <p>{clickedQuestion.CreatedAt}</p>
        </div>

        <div className="comments">{displayComments}</div>
        {showFormFlag ? (
          <CommentForm
            clickedQuestion={clickedQuestion}
            setShowFormFlag={setShowFormFlag}
          />
        ) : (
          <>
            <Button
              id="commentFormButton"
              color="primary"
              variant="contained"
              size="small"
              onClick={() => setShowFormFlag(true)}
            >
              + 回答を追加
            </Button>
            <Button id="returnButton" onClick={() => clickHandle()}>
              質問一覧に戻る
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
