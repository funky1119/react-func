import React from "react";
import Circle from "./screens/Circle/Circle";

function App() {
  return (
    <div>
      <Circle bgColor={"teal"} borderColor="black" />
      <Circle bgColor={"tomato"} text={"그렇다고 한다"} />
    </div>
  );
}

export default App;
