import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <>
      <div class="input-area">
        <input
          type="text"
          placeholder="Input TODO here"
          value={todoText}
          onChange={onChange}
        />
        <button onClick={onClick}>Add</button>
      </div>
    </>
  );
};
