import React from "react";
import { Link } from "react-router-dom";

export default function TodoItem({ todos }) {
  const { id, todo, contents, checked } = todos;
  console.log(id);
  const handleDeleteClick = () => {
    console.log(id);
    fetch(`http://localhost:3001/todolist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("하이"))
      .then((data) => console.log(id));
  };

  return (
    <div>
      <div>
        {todo}
        <span> {checked ? "체크" : "체크안됨"} </span>
        <div>{contents}</div>
      </div>

      <button onClick={handleDeleteClick}>delete</button>
      <button>
        <Link
          to={"/put"}
          state={{
            id: id,
            todo: todo,
            contents: contents,
            checked: checked,
          }}
        >
          put
        </Link>
      </button>
    </div>
  );
}
