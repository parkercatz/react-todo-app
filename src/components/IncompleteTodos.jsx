import React from "react";

export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 押下時にonClickDeleteを発火させたいのでアロー関数を使用する */}
              {/* indexを渡すことによって何番目かを判別させる */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
