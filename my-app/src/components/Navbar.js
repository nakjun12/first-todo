import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1> 홈으로!</h1>
      </Link>
      <Link to="/create" style={{ color: "pink" }}>
        TO DO 작성하기
      </Link>
    </nav>
  );
}
