import React from "react";
import Intro from "../Intro/Intro";
import ProjectCards from "../ProjectCards/ProjectCards";

export default function Landing() {
  return (
    <div>
      <h1>This is my landing page</h1>
      <Intro/>
      <ProjectCards />
    </div>
  );
}
