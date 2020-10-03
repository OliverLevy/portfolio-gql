import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Oliver Levy's Super Sick Portfolio 3.0!</h1>
      <Link to="/">
        <h3>HOME</h3>
      </Link>
      <Link to="/resume">
        <h3>RESUME</h3>
      </Link>
    </div>
  );
}
