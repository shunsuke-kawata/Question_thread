const Details = ({ detailsflag, setDetailsFlag }) => {
  return (
    <>
      {detailsflag ? (
        <div>
          <p>データ詳細</p>
          <button onClick={() => setDetailsFlag(false)}>閉じる</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Details;
