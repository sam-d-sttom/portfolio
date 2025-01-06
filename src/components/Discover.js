import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Discover = (props) => {
    const [transparency, setTransparency] = useState(10);
    const [visible, setVisible] = useState(true);

    const { setDisplayDiscover, displayDiscover, setIntroduction } = props;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
            setDisplayDiscover(false);
            setIntroduction(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [setDisplayDiscover]);


    return (
        <AnimatePresence>
            {displayDiscover && (
                <motion.div id='light' className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[100vw] h-[100vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                >
                    
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Discover;