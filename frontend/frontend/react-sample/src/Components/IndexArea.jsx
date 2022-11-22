import { Button } from "react-bootstrap";
import { Stack } from "@mui/material";
import "../css/IndexArea.css";

const IndexArea = ({ index, data, setIndex }) => {
  const changeIndex = (delta) => {
    var max = Math.floor(data.length / 10);
    if (data.length % 10 !== 0) {
      max++;
    }
    if (index + delta > max) {
      setIndex(1);
    } else if (index + delta < 1) {
      setIndex(max);
    } else {
      setIndex(index + delta);
    }
  };

  let indexString = "";
  if (index < 10) {
    indexString += "0";
  }
  indexString += String(index);

  return (
    <>
      <div id="indexbar">
        <Stack direction="row" spacing={5}>
          <Button
            id="prevbutton"
            variant="outline-primary"
            className="mr-2"
            onClick={() => changeIndex(-1)}
          >
            prev
          </Button>

          <h3>{indexString}ページ</h3>

          <Button
            id="nextbutton"
            variant="outline-primary"
            className="mr-2"
            onClick={() => changeIndex(1)}
          >
            next
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default IndexArea;
