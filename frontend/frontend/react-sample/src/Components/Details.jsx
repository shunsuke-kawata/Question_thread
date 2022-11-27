import "../css/Details.css";

const Details = ({
  clickedQuestion,
  setClickedQuestion,
  setQuestionOrDetail,
}) => {
  const clickHandle = () => {
    setClickedQuestion("none");
    setQuestionOrDetail(false);
  };

  if (clickedQuestion === "none") {
    return <></>;
  }
  return (
    <>
      <p id="test">{clickedQuestion}</p>
      <button onClick={() => clickHandle()}>閉じる</button>
    </>
  );
};

export default Details;
