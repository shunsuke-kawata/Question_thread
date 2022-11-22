import "../css/Details.css";

const Details = ({ setQuestionOrDetail }) => {
  const clickHandle = () => {
    setQuestionOrDetail(false);
  };
  return (
    <>
      <p id="test">質問回答詳細</p>
      <button onClick={() => clickHandle()}>閉じる</button>
    </>
  );
};

export default Details;
