import "../css/Details.css";

const Details = ({
  clickedQuestion,
  setClickedQuestion,
  setQuestionOrDetail,
}) => {
  const clickHandle = () => {
    setClickedQuestion({});
    setQuestionOrDetail(false);
  };

  if (clickedQuestion === {}) {
    return <></>;
  }
  return (
    <>
      <div id="detailDiv">
        <h1>{clickedQuestion.Title}</h1>
        <p>{clickedQuestion.Body}</p>
        <p>{clickedQuestion.CreatedAt}</p>
        <button onClick={() => clickHandle()}>閉じる</button>
      </div>
    </>
  );
};

export default Details;
