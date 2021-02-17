//creating a new react component
import React from "react";
import List from "./List";
import Heading from "./Heading";

//USE PASCAL CASE (FIRST LETTER CAPITALIZED)
//create heading function
function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

//the default export is our function
export default App;
