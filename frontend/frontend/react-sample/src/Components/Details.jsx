const Details = ({ detailsflag, setDetailsFlag }) => {
  const modalContent = {
    background: "white",
    padding: "10px",
    borderRadius: "3px",
  };

  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      {detailsflag ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <p>質問詳細</p>
            <button onClick={() => setDetailsFlag(false)}>Close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Details;
