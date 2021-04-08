import {useState} from "react";
import {v4 as uuid} from "uuid";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  /**Boxes array of {width, height, backgroundColor} */
  const [boxes, setBoxes] = useState([]);

  function removeBox(idx) {
    let copy = boxes.map(box => ({...box}));
    setBoxes(copy.filter((c, i) => i !== idx));
  }

  function handleForm({width, height, backgroundColor}) {
    width = `${width}px`;
    height = `${height}px`;
    setBoxes([...boxes, {width, height, backgroundColor}]);
  }

  return (
    <>
    <div>
      <NewBoxForm handleForm={handleForm}/>
    </div>
    <br></br>
    {boxes.map((box, i) =>
      <Box
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={() => removeBox(i)}
        key = {uuid()}
        />)}
    </>
  );
}


export default BoxList;