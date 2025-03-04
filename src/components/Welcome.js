import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

const Welcome = (props) => {
    const { setDisplayDiscover, displayDiscover, introduction } = props;

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const fullText1 = "NAVIGATING A WORLD FULL OF TECHNOLOGY CAN SOMETIMES FEEL LIKE TAKING A WALK ALONG THE DARKEST PATH YOU CAN IMAGINE...";
    const fullText2 = "LET ME BE YOUR ";
    const fullText3 = "LIGHT";
    const [blinkCursor, setBlinkCursor] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [writeText1, setWriteText1] = useState(false);
    const [writeText2, setWriteText2] = useState(false);
    const [writeText3, setWriteText3] = useState(false);
    const [displayText, setDisplayText] = useState(false);
    const [justify, setJustify] = useState('center');
    const lightRef = useRef(null);

    // Display text after a delay
    useEffect(() => {
        const displayTimeout = setTimeout(() => {
            setDisplayText(true);
            setJustify('between');
            const writeText1Timeout = setTimeout(() => setWriteText1(true), 3000);
            return () => clearTimeout(writeText1Timeout);
        }, 3500);
        return () => clearTimeout(displayTimeout);
    }, []);

    // Type out the first text
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (writeText1) {
                setIsTyping(true);
                setText1(fullText1.slice(0, index + 1));
                index++;
                if (index === fullText1.length) {
                    setIsTyping(false);
                    const writeText2Timeout = setTimeout(() => setWriteText2(true), 2500);
                    clearInterval(interval);
                    return () => clearTimeout(writeText2Timeout);
                }
            }
        }, 60);
        return () => clearInterval(interval);
    }, [writeText1]);

    // Type out the second text
    useEffect(() => {
        let index = 0;
        const interval2 = setInterval(() => {
            if (writeText2) {
                setIsTyping(true);
                setText2(fullText2.slice(0, index + 1));
                index++;
                if (index === fullText2.length) {
                    clearInterval(interval2);
                    setWriteText3(true);
                    setIsTyping(false);
                }
            }
        }, 60);
        return () => clearInterval(interval2);
    }, [writeText2]);

    // Type out the third text
    useEffect(() => {
        let index = 0;
        const interval3 = setInterval(() => {
            if (writeText3) {
                setIsTyping(true);
                setText3(fullText3.slice(0, index + 1));
                index++;
                if (index === fullText3.length) {
                    clearInterval(interval3);
                    setIsTyping(false);
                    setDisplayDiscover(true);
                }
            }
        }, 60);
        return () => clearInterval(interval3);
    }, [writeText3]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setBlinkCursor(prev => !prev);
        }, 530); // Blink every 530ms
        return () => clearInterval(cursorInterval);
    }, []);

    // Track the position of the "LIGHT" text
    useEffect(() => {
        const updateLightPosition = () => {
            if (lightRef.current) {
                const rect = lightRef.current.getBoundingClientRect();
                document.documentElement.style.setProperty('--x', `${rect.left + rect.width / 2}px`);
                document.documentElement.style.setProperty('--y', `${rect.top + rect.height / 2}px`);
                let pos = document.documentElement;
                pos.addEventListener('mousemove', (e) => {
                    pos.style.setProperty('--x', `${rect.left + rect.width / 2}px`);
                    pos.style.setProperty('--y', `${rect.top + rect.height / 2}px`);
                });
            }
        };

        updateLightPosition();
        window.addEventListener('resize', updateLightPosition);
        window.addEventListener('scroll', updateLightPosition);

        return () => {
            window.removeEventListener('resize', updateLightPosition);
            window.removeEventListener('scroll', updateLightPosition);
        };
    }, [text3]);

    const textDivVariant = {
        initial: {
            width: '0'
        },
        final: {
            width: '50vw'
        }
    };

    // getting the view port width each time the user resizes the window.
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

    return (
        <AnimatePresence>
            {introduction && (
                <motion.div className="absolute top-0 left-0 right-0 bottom-0 flex items-center md:px-[2vw] ssm:px-[7vw]"
                    exit={{ opacity: 0, }}
                    transition={{ duration: 2 }}
                >

                    <div className="w-full md:h-2/4 ssm:h-3/4 relative ">

                        <motion.div className=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 4,
                                delay: 3
                            }}
                        >
                            <h1 className="text-secondaryTextColor mb-3 font-extrabold md:text-h1FontSize ssm:text-h1FontSizeSsm">OYEBANJI OLUWATOMISIN</h1>
                            <h2 className="text-secondaryTextColor font-medium md:mb-4 ssm:mb-20 md:text-h2FontSize ssm:text-h2FontSizeSsm">Software Engineer</h2>
                        </motion.div>

                        <motion.div className="md:w-[80vw] ssm:w-[100vw] text-center justify-self-center ssm:text-welcomeParagraphFontSize"
                            variants={textDivVariant}
                            initial={displayText ? "initial" : "final"}
                            animate={displayText ? "final" : "initial"}
                        >
                            <p>{text1}{text2}<span className="glow" ref={lightRef}>{text3}</span>{displayText && (isTyping ? "|" : blinkCursor ? "|" : "")}</p>
                        </motion.div>

                        <motion.svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 11.039999961853027 81.83999633789062 30.200000762939453"
                            initial={{
                                width: '50vw',
                                right: '50%',
                                bottom: '50%',
                                y: '50%',
                                x: '50%',
                                position: 'absolute'
                            }}
                            animate={{
                                width: viewportWidth < 768 ? '40vw' : '10vw' ,
                                right: '0%',
                                bottom: 0,
                                y: 0,
                                x: 0,
                                position: 'block'
                            }}
                            transition={{
                                duration: 2,
                                delay: 3.5
                            }}
                        >
                            <motion.path
                                d="M13 36.04L13 36.04Q12.04 34.76 10.52 32.48L10.52 32.48Q0 31.44 0 28.08L0 28.08Q0 27.32 0.78 26.84Q1.56 26.36 3.16 26.36L3.16 26.36Q7.16 26.36 11.12 31.44L11.12 31.44Q15.12 31.84 20.20 31.84L20.20 31.84L20.64 31.84Q25.76 28.76 30.16 25.64L30.16 25.64Q31.96 22.36 33.28 20.22Q34.60 18.08 36.48 15.76L36.48 15.76Q40.20 11.04 44.32 11.04L44.32 11.04Q45.40 11.04 45.40 12L45.40 12Q45.40 14.32 41.56 18.08Q37.72 21.84 31.36 26.16L31.36 26.16Q29.44 29.84 28.48 31.52L28.48 31.52Q34.08 31.08 36.56 30.16L36.56 30.16L36.68 30.16Q36.84 30.16 36.84 30.38Q36.84 30.60 36.56 31L36.56 31Q33.56 31.92 27.92 32.44L27.92 32.44Q25.76 36.16 23.74 38.22Q21.72 40.28 19.68 40.28L19.68 40.28Q16.40 40.28 13.48 36.64L13.48 36.64Q7.76 39.52 3.36 41.04L3.36 41.04Q2.76 41.24 1.98 41.24Q1.20 41.24 1.20 40.64L1.20 40.64Q1.20 40.32 1.52 40.06Q1.84 39.80 2.36 39.80L2.36 39.80Q5.56 39.80 13 36.04ZM20.64 32.84L20.64 32.84Q17.60 34.56 14.64 36.08L14.64 36.08Q17.32 39.40 19.52 39.40L19.52 39.40Q21.16 39.40 22.78 37.64Q24.40 35.88 26.36 32.56L26.36 32.56Q23.92 32.76 20.64 32.84ZM43.20 12L43.20 12Q40.44 12 37.64 15.68L37.64 15.68Q35.32 18.80 32.56 23.92L32.56 23.92Q37.60 20.20 40.64 17.14Q43.68 14.08 43.68 12.40L43.68 12.40Q43.68 12 43.20 12ZM1.92 27.92L1.92 27.92Q1.92 30.20 9.64 31.24L9.64 31.24Q6.52 27.08 3.36 27.08L3.36 27.08Q1.92 27.08 1.92 27.92ZM14.16 35.48L14.16 35.48Q16.64 34.16 18.92 32.84L18.92 32.84L18.76 32.84Q15.28 32.84 12.04 32.60L12.04 32.60Q13.56 34.72 14.16 35.48ZM29.08 27.68L29.08 27.68Q26.92 29.12 22.36 31.84L22.36 31.84Q25.44 31.76 26.88 31.64L26.88 31.64Q27.64 30.32 29.08 27.68ZM60.36 23.04L60.36 23.04L54.64 22.76Q51.12 22.76 47.64 23.04L47.64 23.04L47.84 23.84Q47.84 24.28 45.24 27.18Q42.64 30.08 40.04 33.50Q37.44 36.92 37.44 38.56L37.44 38.56Q37.44 39.20 37.90 39.20Q38.36 39.20 40 38.08L40 38.08Q43.04 36.08 45.56 34.04L45.56 34.04L46.44 33.32Q46.72 33.12 46.92 33.12Q47.12 33.12 47.12 33.36L47.12 33.36L47.12 33.48Q47.28 33.48 44.98 35.24Q42.68 37 40.06 38.76Q37.44 40.52 36.76 40.52L36.76 40.52Q35.60 40.52 35.60 39.48L35.60 39.48Q35.60 37.96 37.30 35.28Q39 32.60 41.02 30.22Q43.04 27.84 44.86 25.72Q46.68 23.60 46.84 23.12L46.84 23.12Q42.44 23.52 40.08 24.08L40.08 24.08L39.28 24.24Q38.96 24.28 38.96 24.84L38.96 24.84Q38.96 25.08 38.40 25.08Q37.84 25.08 37.02 24.82Q36.20 24.56 36.20 24.08Q36.20 23.60 37 23.44L37 23.44Q42.92 22.40 45.40 22.18Q47.88 21.96 48.70 21.90Q49.52 21.84 51.26 21.80Q53 21.76 53.60 21.76L53.60 21.76Q55.40 21.68 57.82 21.68Q60.24 21.68 60.76 21.88Q61.28 22.08 61.28 22.64L61.28 22.64Q61.28 23.04 60.36 23.04ZM67.92 23.04L67.92 23.04L62.20 22.76Q58.68 22.76 55.20 23.04L55.20 23.04L55.40 23.84Q55.40 24.28 52.80 27.18Q50.20 30.08 47.60 33.50Q45 36.92 45 38.56L45 38.56Q45 39.20 45.46 39.20Q45.92 39.20 47.56 38.08L47.56 38.08Q50.60 36.08 53.12 34.04L53.12 34.04L54 33.32Q54.28 33.12 54.48 33.12Q54.68 33.12 54.68 33.36L54.68 33.36L54.68 33.48Q54.84 33.48 52.54 35.24Q50.24 37 47.62 38.76Q45 40.52 44.32 40.52L44.32 40.52Q43.16 40.52 43.16 39.48L43.16 39.48Q43.16 37.96 44.86 35.28Q46.56 32.60 48.58 30.22Q50.60 27.84 52.42 25.72Q54.24 23.60 54.40 23.12L54.40 23.12Q50 23.52 47.64 24.08L47.64 24.08L46.84 24.24Q46.52 24.28 46.52 24.84L46.52 24.84Q46.52 25.08 45.96 25.08Q45.40 25.08 44.58 24.82Q43.76 24.56 43.76 24.08Q43.76 23.60 44.56 23.44L44.56 23.44Q50.48 22.40 52.96 22.18Q55.44 21.96 56.26 21.90Q57.08 21.84 58.82 21.80Q60.56 21.76 61.16 21.76L61.16 21.76Q62.96 21.68 65.38 21.68Q67.80 21.68 68.32 21.88Q68.84 22.08 68.84 22.64L68.84 22.64Q68.84 23.04 67.92 23.04ZM57.00 36.56L57.00 36.56Q59.24 36.56 62.36 34.04L62.36 34.04L63.04 34.24Q59.12 37.52 56.28 37.52L56.28 37.52Q55.96 37.52 55.80 37.48L55.80 37.48Q54.72 38.80 53.44 39.62Q52.16 40.44 51.20 40.44L51.20 40.44Q49.68 40.44 49.68 38.74Q49.68 37.04 52.52 34.20L52.52 34.20Q52.04 33.04 52.04 31.76Q52.04 30.48 52.96 29.68Q53.88 28.88 55.10 28.88Q56.32 28.88 57.16 29.68Q58.00 30.48 58.00 31.96L58.00 31.96Q58.00 34.24 56.52 36.52L56.52 36.52Q56.68 36.56 57.00 36.56ZM55.72 36.16L55.72 36.16Q56.96 34.08 56.96 32.62Q56.96 31.16 56.24 30.46Q55.52 29.76 54.84 29.76L54.84 29.76Q53.44 29.76 53.44 31.20Q53.44 32.64 54.08 34.06Q54.72 35.48 55.72 36.16ZM51.32 38.52L51.32 38.52Q51.32 39.32 52.36 39.32Q53.40 39.32 55.00 37.20L55.00 37.20Q53.92 36.64 53.08 35.24L53.08 35.24Q51.32 37.16 51.32 38.52ZM62.96 33.04L62.96 33.04L62.88 32.60Q62.88 32.40 63.72 32.40L63.72 32.40Q64.20 32.40 64.20 33Q64.20 33.60 62.82 35.66Q61.44 37.72 61.44 37.80Q61.44 37.88 61.60 37.88Q61.76 37.88 65.30 35.08Q68.84 32.28 69.56 32.28Q70.28 32.28 70.28 32.78Q70.28 33.28 69.88 33.90Q69.48 34.52 68.20 36.14Q66.92 37.76 66.84 37.88Q66.76 38 66.76 38.16Q66.76 38.32 67.02 38.32Q67.28 38.32 70.96 35.60Q74.64 32.88 75.16 32.88Q75.68 32.88 75.68 33.32L75.68 33.32Q75.68 34.12 73.92 36.12Q72.16 38.12 72.16 38.66Q72.16 39.20 72.58 39.20Q73.00 39.20 74.68 38.08L74.68 38.08Q77.68 36.08 80.20 34.04L80.20 34.04L81.08 33.32Q81.40 33.12 81.62 33.12Q81.84 33.12 81.84 33.36L81.84 33.36L81.84 33.48Q73.40 40.52 71.40 40.52L71.40 40.52Q70.24 40.52 70.24 39.56L70.24 39.56Q70.24 38.76 71.40 37.20Q72.56 35.64 72.56 35.50Q72.56 35.36 72.46 35.36Q72.36 35.36 69.18 37.64Q66.00 39.92 65.40 39.92L65.40 39.92Q65.12 39.92 64.92 39.70Q64.72 39.48 64.72 39.24L64.72 39.24Q64.72 38.52 66.44 36.32L66.44 36.32Q68.16 34.16 68.16 33.96L68.16 33.96Q68.16 33.76 67.92 33.76L67.92 33.76Q67.64 33.76 62.24 38.16L62.24 38.16L60.24 39.76Q59.72 40.20 59.46 40.20Q59.20 40.20 58.96 40.06Q58.72 39.92 58.72 39.64Q58.72 39.36 59.42 38.28Q60.12 37.20 61.24 35.64L61.24 35.64Q62.96 33.32 62.96 33.04Z" fill="black"
                                stroke="#94a3b8"
                                strokeWidth="0.1"
                                initial={{ pathLength: 0, fill: "rgba(148, 163, 184, 0)" }}
                                animate={{ pathLength: 1, fill: "#94a3b8" }}
                                transition={{
                                    pathLength: { duration: 6, ease: "easeInOut" },
                                    fill: { duration: 1, delay: 1.5 }
                                }}
                            >
                            </motion.path>
                        </motion.svg>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Welcome;