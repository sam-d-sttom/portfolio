// import { Link } from "react-router-dom"
import { animate, AnimatePresence, motion } from "framer-motion";
import { HashLink, NavHashLink } from "react-router-hash-link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header(props) {
    const introduction = props.introduction;

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
        <AnimatePresence>
            {!introduction && (
                <motion.header className="2xl: xl: lg:w-3/6 lg:sticky lg:top-20 lg:mb-0 md: sm: ssm:6/6 ssm:h-3/6 ssm:mb-40 text-headerFontSize"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{duration: 4}}
                >
                    <div>
                        <h1 className="text-secondaryTextColor mb-3 font-extrabold text-h1FontSize">OYEBANJI OLUWATOMISIN</h1>
                        <h2 className="text-secondaryTextColor font-medium mb-4 text-h2FontSize">Software Engineer</h2>
                        <p className="text-headerParagraphFontSize mb-8">I build pixel-perfect, engaging, and <br></br>accessible digital experiences.</p>
                    </div>

                    <nav className="lg:block mb-24 ssm:hidden text-navFontSize">
                        <ul className="flex flex-col justify-between h-20 ">
                            <li className="">
                                <NavHashLink
                                    activeClassName="activelink"
                                    activeStyle={{ color: '#f8fafc' }}
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
                                            // whileHover={{ scale: 1.2 }}
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
                </motion.header>
            )}
        </AnimatePresence>
    )


}