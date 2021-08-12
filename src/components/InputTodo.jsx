import React from "react";

const style = {
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  backgroundColor: "#c1ffff",
  borderRadius: "8px"
};

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div style={style}>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        placeholder="TODOを入力"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
