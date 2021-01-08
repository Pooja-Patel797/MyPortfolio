import React from "react";
import "./style.css";

import { Header } from "./components/header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Blogs } from "./components/blogs";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";
import "./style.css";

export const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
};
