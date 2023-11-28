import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todo,
  handleCheck,
  handleDelete,
  handleClear,
}) {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        background: "#F1EEE9",
        borderRadius: "9px",
      }}
    >
      <ul
        style={{
          padding: "40px 20px",
        }}
      >
        {todo.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          );
        })}

        <span
          className="clear-button"
          onClick={handleClear}
          style={{
            float: "right",
            padding: "0 20px",
            marginBottom: " 30px",
            paddingTop: "10px",
            color: "#eeba76",
          }}
        >
          <i className="fa-solid fa-trash"></i> Clear Completely
        </span>
      </ul>
    </div>
  );
}
