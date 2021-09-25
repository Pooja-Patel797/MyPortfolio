import React from "react";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Blogs } from "./components/blogs";
import { Certificates } from "./components/certifications";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

import "./style.css";

export const App: React.FC = () => {
  return (
    <div className="root">
      <Home />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <Blogs />
      <Footer />
    </div>
  );
};
