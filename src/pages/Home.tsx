import { Hero } from "./home/Hero.tsx";
import { Projects } from "./home/Projects.tsx";
import { About } from "./home/About.tsx";
import { Contacts } from "../components/Contacts.tsx";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contacts />
    </div>
  );
};
