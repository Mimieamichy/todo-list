import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todo,
  handleCheck,
  handleDelete,
  handleClear,
  handleDark,
  darkMode,
}) {
  return (
    <div
      style={
        !darkMode
          ? {
              background: "rgba(250, 250, 250, .3)",
              webkitBackdropFilter: "blur(7px)",
              backdropFilter: "blur(7px)",
              width: "80%",
              margin: "0 auto",
              borderRadius: "9px",
              border: "2px solid #979390",
            }
          : {
              width: "80%",
              margin: "0 auto",
              background: "#F1EEE9",
              borderRadius: "9px",
            }
      }
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
              darkMode={darkMode}
            />
          );
        })}
        <span
          style={{
            float: "left",
            padding: "0 20px",
            marginBottom: " 30px",
            paddingTop: "10px",
            color: "#eeba76",
          }}
        >
          <button onClick={handleDark}>
            {darkMode ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun" />
            )}
          </button>
        </span>

        <span
          className="clear-button"
          onClick={handleClear}
          style={
            !darkMode
              ? {
                  float: "right",
                  padding: "0 20px",
                  marginBottom: " 30px",
                  paddingTop: "10px",
                  color: "white",
                }
              : {
                  float: "right",
                  padding: "0 20px",
                  marginBottom: " 30px",
                  paddingTop: "10px",
                  color: "#eeba76",
                }
          }
        >
          <i className="fa-solid fa-trash"></i> Clear Completely
        </span>
      </ul>
    </div>
  );
}
