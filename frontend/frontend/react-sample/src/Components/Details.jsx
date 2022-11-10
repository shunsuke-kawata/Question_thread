const Details = ({ detailsflag, setDetailsFlag }) => {
  const closeDetails = () => {
    setDetailsFlag(false);
    console.log(detailsflag);
  };
  return (
    <>
      {detailsflag ? (
        <div>
          <p>データ詳細</p>
          <button onClick={closeDetails}>閉じる</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Details;
