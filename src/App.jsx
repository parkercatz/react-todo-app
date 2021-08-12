import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
