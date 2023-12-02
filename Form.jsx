import React from "react";

export default function Form({ addTodo, }) {
  const [title, setTitle] = React.useState("");
  const [number, setNumber] = React.useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) return;

    const newTodo = {
      title,
      packed: false,
      id: Date.now(),
      number,
    };

    addTodo(newTodo);
    setTitle("");

    
  };
  const handleCount = () => {
    setNumber(number + 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <input
        type="text"
        placeholder="What do you have to do now?"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        style={{
          background: "#F1EEE9",
          color: "#979390",
          width: "50%",
          padding: "8px",
          borderRadius: "20px 0 0 20px ",
          fontSize: "13px",
        }}
      />
      <button
        onClick={handleCount}
        style={{
          borderRadius: "0 20px 20px 0 ",
          color: "whitesmoke",
          background: "#76B7CB",
          padding: "7px 20px",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        ADD
      </button>
    </form>
  );
}
