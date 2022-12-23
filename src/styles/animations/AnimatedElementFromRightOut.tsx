import { motion } from "framer-motion";

const animations = {
    initial: { x: 100 },
    animate: { x: -100 },
    exit: { x: 0 },
};

const AnimatedElementFromRightOut = ({ children }) => {
    return (
        <motion.div
            style={{ position: "fixed", top: "0", left: "0" }}
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, delay: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedElementFromRightOut;