import React from "react";

export const InProgressTodo = (props) => {
  const { todo, handleComplete, handleDelete } = props;
  return (
    <>
      <div className="inProgress-area">
        <p className="title">In Progress</p>
        <ul>
          {todo.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => handleComplete(index)}>Done</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
