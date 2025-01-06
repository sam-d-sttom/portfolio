import { AnimatePresence, motion } from "framer-motion"
import About from "../pages/About"
import Experience from "../pages/Experience"
import Projects from "../pages/Projects"
// import { Link } from 'react-router-dom';


export default function Main(props) {
    const introduction = props.introduction;

    return (
        <AnimatePresence>
            {!introduction && (
                <motion.main className="2xl: xl: lg:w-3/6 md: sm: ssm:6/6 text-responsiveFontSize"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 6}}
                >
                    <About />
                    <Experience />
                    <Projects />
                </motion.main>
            )}
        </AnimatePresence>
    )
}