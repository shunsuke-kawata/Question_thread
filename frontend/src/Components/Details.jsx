import "../css/Details.css";
import Comment from "./Comment";

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

  const displayComments = comments.map((comment) => (
    <Comment comment={comment} key={comment.ID} />
  ));
  console.log(clickedQuestion);

  if (clickedQuestion === {}) {
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
        <button onClick={() => clickHandle()}>閉じる</button>
      </div>
    </>
  );
};

export default Details;
