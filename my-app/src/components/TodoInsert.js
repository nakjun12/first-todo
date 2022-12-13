import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoInsert() {
  const [id, setID] = useState(15);
  const [todo, setTodo] = useState("6");
  const [contents, setContents] = useState("중꺾마");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo,
        contents,
        checked,
      }),
    }).then(() => navigate("/"));
  };
  return (
    <div>
      <h2 style={{ color: "red" }}>할일을 추가하세요!</h2>
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
// input 벨류값 안적어보기
