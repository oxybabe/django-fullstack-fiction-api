import React from "react";
import Button from "./components/Books";
import MyComponent from "./components/MyComponents";
const App = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <h1>Welcome to the Fiction App</h1>
      <Button text="Click here!" onClick={handleClick} />
      <MyComponent />
    </div>
  );
};
export default App;
