import React from "react";

const style = {
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  backgroundColor: "#c1ffff",
  borderRadius: "8px"
};

export const InputTodo = ({ todoText, onChange, onClick }) => {
  return (
    <div style={style}>
      <input value={todoText} onChange={onChange} placeholder="TODOを入力" />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
