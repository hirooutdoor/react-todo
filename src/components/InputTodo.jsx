import React from "react";

//just so you know, you can write css in JS like so
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "10px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <>
      <div style={style}>
        <input
          type="text"
          placeholder="Input TODO here"
          value={todoText}
          onChange={onChange}
          disabled={disabled}
        />
        <button onClick={onClick}>Add</button>
      </div>
    </>
  );
};
