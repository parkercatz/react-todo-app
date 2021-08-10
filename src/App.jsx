import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <ColorfulMessage color="blue">hoge</ColorfulMessage>
      <ColorfulMessage color="pink">fuga</ColorfulMessage>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
