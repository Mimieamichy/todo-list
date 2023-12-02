import React from "react";

export default function Todo({
  id,
  title,
  number,
  packed,
  handleCheck,
  handleDelete,
  darkMode
}) {
  return (
    <li
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
        borderBottom: "2px solid #b19682",
      }}
    >
      <div className="">
        <input
          className="checkbox"
          type="checkbox"
          value={packed}
          onChange={() => handleCheck(id)}
        />
        <span
          className="check"
          style={
            packed
              ? {
                  textDecoration: "line-through",
                  color: "#eeba76",
                  fontSize: "20px",
                }
              : { fontSize: "20px", color: "#c28434" }
          }
        >
          {title} No.{number}
        </span>
      </div>

      <span onClick={() => handleDelete(id)} className="delete-button">
        <i style={!darkMode ? {color: "white",
  cursor: "pointer"} : {color: "#eeba76",
    cursor: "pointer"}}  className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}
