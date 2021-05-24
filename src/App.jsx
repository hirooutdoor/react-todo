import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inProgressTodo, setInprogressTodo] = useState(["TODO1", "TODO2"]);
  const [completeTodo, setCompleteTodo] = useState(["TODO3"]);

  const handleChange = (event) => setTodoText(event.target.value);

  const handleAdd = () => {
    if (todoText === "") return; //To prevent adding empty text
    const newTodo = [...inProgressTodo, todoText];
    setInprogressTodo(newTodo);
    setTodoText("");
  };

  return (
    <>
      <div class="input-area">
        <input
          type="text"
          placeholder="Input TODO here"
          value={todoText}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div class="inProgress-area">
        <p class="title">In Progress</p>
        <ul>
          {inProgressTodo.map((todo, index) => {
            return (
              <div key={index} class="list-row">
                <li>{todo}</li>
                <button>Done</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">Complete</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button>Back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
