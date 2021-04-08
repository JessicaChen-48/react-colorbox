import "./Box.css"

function Box({ width = "100px", height = "100px", backgroundColor = "black", removeBox}) {
  let boxDetails = { width, height, backgroundColor };
  return <div className="box" style={boxDetails}><button onClick={removeBox}>X</button></div>;
}

export default Box;
