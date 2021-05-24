import React from "react";

export const InputTodo = (props) => {
  return (
    <>
      <div class="input-area">
        <input
          type="text"
          placeholder="Input TODO here"
          value={props.todoText}
          onChange={props.onChange}
        />
        <button onClick={props.onClick}>Add</button>
      </div>
    </>
  );
};
