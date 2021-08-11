import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    // 入力欄が空だった場合追加させない
    if (todoText === "") return;
    // 未完了の配列に入力された値を追加する
    const newTodos = [...incompleteTodos, todoText];
    // 新しい配列に更新する
    setIncompleteTodos(newTodos);
    // 追加ボタン押下後、入力欄を空にする
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // 現在の配列を取得
    const newTodos = [...incompleteTodos];
    // index番目の値を削除する
    newTodos.splice(index, 1);
    // 配列を更新する
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // 現在の配列を取得
    const newIncompleteTodos = [...incompleteTodos];
    // index番目の値を削除する
    newIncompleteTodos.splice(index, 1);
    // 現在の完了の配列に押下されたtodoを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを入力"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
