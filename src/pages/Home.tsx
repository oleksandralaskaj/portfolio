import { Hero } from "./home/Hero.tsx";
import { Projects } from "./home/Projects.tsx";
import { About } from "./home/About.tsx";
import { Contacts } from "../components/Contacts.tsx";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <Contacts />
    </div>
  );
};
