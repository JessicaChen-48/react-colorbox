import {useState} from "react"
import {v4 as uuid} from "uuid"
import Box from "./Box.js"
import NewBoxForm from "./NewBoxForm"

function BoxList() {

  const [boxes, setBoxes] = useState([{width:"100px", height:"100px", backgroundColor:"red"}]);

  function removeBox(idx) {
    let copy = boxes.map(box => ({...box}))
    setBoxes(copy.filter((c, i) => i !== idx))
  }

  function handleForm({width, height, backgroundColor}) {
    width = `${width}px`
    height = `${height}px`
    let copy = boxes.map(box => ({...box}))
    setBoxes([...copy, {width, height, backgroundColor}])
  }

  return (
    <>
    {boxes.map((box, i) =>
      <Box 
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        removeBox={() => removeBox(i)}
        key = {uuid()}
        />)}
    <NewBoxForm handleForm={handleForm}/>
    </>
  )
}


export default BoxList;