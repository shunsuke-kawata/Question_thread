import { HStack } from "@chakra-ui/react";

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
    console.log(index);
  };

  return (
    <>
      <HStack>
        <button onClick={() => changeIndex(-1)}>-</button>
        <p>{index}ページ</p>
        <button onClick={() => changeIndex(1)}>+</button>
      </HStack>
    </>
  );
};

export default IndexArea;
