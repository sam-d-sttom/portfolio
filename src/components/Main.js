import About from "../pages/About"
import Experience from "../pages/Experience"
import Projects from "../pages/Projects"
// import { Link } from 'react-router-dom';


export default function Main(){
    return (
        <main className=" 2xl: xl: lg:w-3/6  md: sm: ssm:6/6 ">
           <About />
           <Experience />
           <Projects />
        </main>
    )
}