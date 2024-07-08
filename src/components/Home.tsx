import {Hero} from "./Hero.tsx";
import {Projects} from "./Projects.tsx";
import {About} from "./About.tsx";
import {Contacts} from "./Contacts.tsx";

export const Home = () => {
    return <div>
        <Hero/>
        <Projects/>
        <About/>
        <Contacts/>
    </div>
}