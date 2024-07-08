import {Hero} from "./Hero.tsx";
import {Projects} from "./Projects.tsx";
import {About} from "./About.tsx";

export const Home = () => {
    return <div>
        <Hero/>
        <Projects/>
        <About/>
    </div>
}