// import { Link } from "react-router-dom"
import { animate, motion } from "framer-motion";
import { HashLink, NavHashLink } from "react-router-hash-link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
    const customScroll = (el, offsetPercentage) => {
        const viewportHeight = window.innerHeight;
        const offset = (viewportHeight * offsetPercentage) / 100; // Calculate offset based on viewport height

        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        const targetPosition = elementTop - offset; // Target scroll position

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    };

    const navIcon = {
        // initial: { scale: 1 },
        // animate: { scale: 2 }
        initial: { width: "2rem", height: '1px', backgroundColor: "#94a3b8" },
        animate: { width: '4rem', height: '1.5px', backgroundColor: "#f8fafc" }
    }

    const navText = {
        // initial: { scale: 1 },
        // animate: { scale: 2 }
        initial: { color: "#94a3b8" },
        animate: { color: "#f8fafc" }
    }

    const arrow = {
        initial: { rotate: 0, scale: 1 },
        animate: { rotate: 90, scale: 1.5 },
    }

    return (
        <header className="2xl: xl: lg:w-3/6 lg:sticky lg:top-20 lg:mb-0 md: sm: ssm:6/6 ssm:h-3/6 ssm:mb-40 ">
            <div>
                <h1 className="text-secondaryTextColor 2xl:text- xl:text- lg:text- md:text-3xl mb-3  font-extrabold sm:text- ssm:text-2xl">OYEBANJI OLUWATOMISIN</h1>
                <h2 className="text-secondaryTextColor 2xl:text- xl:text- lg:text- md:text-2xl font-medium mb-4 sm:text- ssm:text-">Software Engineer</h2>
                <p className="2xl:text- xl:text- lg:text- md:text-lg mb-8 sm:text- ssm:text-">I build pixel-perfect, engaging, and <br></br>accessible digital experiences.</p>
            </div>

            <nav className="2xl:text- xl:text- lg:text- lg:block md:text-sm mb-24 sm:text- ssm:text- ssm:hidden">
                <ul className="flex flex-col justify-between h-20 ">
                    <li className="">
                        <NavHashLink 
                        activeClassName="activelink"
                        activeStyle={{color: '#f8fafc'}}
                            className="inline-flex items-center cursor-pointer"
                            to="/#about"
                            scroll={() => customScroll(document.getElementById('about'), 20)}
                        >
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="inline-flex items-center cursor-pointer"
                            >
                                <motion.div
                                    // whileHover={{ scale: 1.2 }?}
                                    variants={navIcon}
                                    className="bg-bg2 h-px w-8 mr-3"
                                ></motion.div>
                                <motion.span variants={navText}>ABOUT</motion.span>
                            </motion.div>
                        </NavHashLink>
                        
                    </li>
                    <li className="">
                        <HashLink
                            className="inline-flex items-center cursor-pointer"
                            to="/#experience"
                            scroll={() => customScroll(document.getElementById('experience'), 20)}
                        >
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="inline-flex items-center cursor-pointer"
                            >
                                <motion.div
                                    // whileHover={{ scale: 1.2 }?}
                                    variants={navIcon}
                                    className="bg-bg2 h-px w-8 mr-3"
                                ></motion.div>
                                <motion.span variants={navText}>EXPERIENCE</motion.span>
                            </motion.div>
                        </HashLink>
                    </li>
                    <li className="">
                        <HashLink
                            className="inline-flex items-center cursor-pointer"
                            to="/#projects"
                            scroll={() => customScroll(document.getElementById('projects'), 20)}
                        >
                            <motion.div
                                initial="initial"
                                animate="initial"
                                whileHover="animate"
                                className="inline-flex items-center cursor-pointer"
                            >
                                <motion.div
                                    // whileHover={{ scale: 1.2 }?}
                                    variants={navIcon}
                                    className="bg-bg2 h-px w-8 mr-3"
                                ></motion.div>
                                <motion.span variants={navText}>PROJECTS</motion.span>
                            </motion.div>
                        </HashLink>
                    </li>
                </ul>
            </nav>

            <ul className="flex justify-between w-52">
                <li><a href="/#test"><FaGithub size={24} /></a></li>
                <li><FaLinkedin size={24} /></li>
                <li><FaCodepen size={24} /></li>
                <li><FaInstagramSquare size={24} /></li>
                <li><FaXTwitter size={24} /></li>
            </ul>
        </header>
    )
}