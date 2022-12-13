import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function TodoInsert() {
  const [todo, setTodo] = useState("6");
  const [contents, setContents] = useState("중꺾마");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().state.id;
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("야호");
    fetch(`http://localhost:3001/todolist/${location}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo,
        contents,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  //   fetch(`http://localhost:3001/blogs/${params.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(blog),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  return (
    <div>
      <h2 style={{ color: "red" }}>목표를 수정하세요</h2>
      <form onSubmit={handleSubmit}>
        <label> 목표</label>
        <input
          type="text"
          required
          onChange={(e) => setTodo(e.target.value)}
          placeholder="목표"
        ></input>
        <div></div>

        <label>내용</label>
        <textarea
          required
          onChange={(e) => setContents(e.target.value)}
          placeholder="내용입력"
        ></textarea>
        <button>입력</button>
      </form>
    </div>
  );
}
