import React from "react";

export const CompleteTodo = (props) => {
  const { todo, handleBack } = props;

  return (
    <div class="complete-area">
      <p class="title">Complete</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={index} class="list-row">
              <li>{todo}</li>
              <button onClick={() => handleBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
