import { HStack } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
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

  return (
    <>
      <div id="indexbar">
        <div id="centerstack">
          <Button
            variant="outline-primary"
            className="mr-2"
            onClick={() => changeIndex(-1)}
          >
            prev
          </Button>
          <div>
            <p>{index}ページ</p>
          </div>
          <Button
            variant="outline-primary"
            className="mr-2"
            onClick={() => changeIndex(1)}
          >
            next
          </Button>
        </div>
      </div>
    </>
  );
};

export default IndexArea;
