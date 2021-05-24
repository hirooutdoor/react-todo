import { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { InProgressTodo } from "./components/InProgressTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inProgressTodo, setInprogressTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  const handleChange = (event) => setTodoText(event.target.value);

  const handleAdd = () => {
    if (todoText === "") return; //To prevent adding empty text
    const newTodo = [...inProgressTodo, todoText];
    setInprogressTodo(newTodo);
    setTodoText("");
  };

  const handleDelete = (index) => {
    const newTodo = [...inProgressTodo];
    newTodo.splice(index, 1); //1番目の引数はindex, 2番目の引数には指定したindexの要素をいくつ削除するか指定
    setInprogressTodo(newTodo);
  };

  const handleComplete = (index) => {
    const newInProgressTodo = [...inProgressTodo];
    newInProgressTodo.splice(index, 1);
    setInprogressTodo(newInProgressTodo);

    const newCompleteTodo = [...completeTodo, inProgressTodo[index]];
    setCompleteTodo(newCompleteTodo);
  };

  const handleBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    setCompleteTodo(newCompleteTodo);

    const newInProgressTodo = [...inProgressTodo, completeTodo[index]];
    setInprogressTodo(newInProgressTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={handleChange}
        onClick={handleAdd}
      />
      <InProgressTodo
        todo={inProgressTodo}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <div class="complete-area">
        <p class="title">Complete</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key={index} class="list-row">
                <li>{todo}</li>
                <button onClick={() => handleBack(index)}>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
