import "./Box.css";

function Box({ width, height, backgroundColor, removeBox}) {
  let boxDetails = { width, height, backgroundColor };
  return (
    <div>
      <div className="box" style={boxDetails}>
      </div>
      <button onClick={removeBox}>REMOVE THE BOX</button>
    </div>
  );
}

export default Box;
