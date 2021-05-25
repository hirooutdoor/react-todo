import React from "react";

export const CompleteTodo = (props) => {
  const { todo, handleBack } = props;

  return (
    <div className="complete-area">
      <p className="title">Complete</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => handleBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
