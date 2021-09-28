import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"

document.querySelector("#get-data").addEventListener("click", () => {
  console.log("You clicked the button");
})

ReactDOM.render(<App />, document.querySelector("#root"));
