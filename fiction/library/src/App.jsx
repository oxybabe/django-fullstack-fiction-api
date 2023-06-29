import React, { useState, useSyncExternalStore } from "react";
import Button from "./components/Books";
import MyComponent from "./components/Homescreen";
import Homescreen from "./components/Homescreen";

const App = () => {
  const [addBookForm, setAddBookForm] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <h1>Welcome to the Fiction App</h1>
      {/* <button onClick={() => setAddBookForm(true)}>Add Book</button>
      <Button text="Click here!" onClick={handleClick} />
      {addBookForm} */}
      <Homescreen />
    </div>
  );
};
export default App;
