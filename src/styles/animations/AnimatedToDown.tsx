import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y:0 },
    exit: { opacity: 0,  y: 100 },
};

const AnimatedToDown = ({ children, delay, duration}) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2 || duration, delay: delay }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedToDown;