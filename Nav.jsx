import React from "react";

export default function Nav() {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F1EEE9",
          color: "#979390",
          fontFamily: "serif",
          fontSize: "30px",
        }}
      >
        <h1>
          TO
          <span
            style={{
              color: "#C28434",
            }}
          >
            DO
          </span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          color: "#4A4A4A",
          background: "#F3F3F3",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "#4A4A4A",
            cursor: "pointer",
          }}
          href=""
        >
          <div>
            <h4>Personal</h4>
          </div>
        </a>

        <a
          style={{
            textDecoration: "none",
            color: "#4A4A4A",
            cursor: "pointer",
          }}
          href=""
        >
          <div>
            <h4>Professional</h4>
          </div>
        </a>
      </div>
    </div>
  );
}
