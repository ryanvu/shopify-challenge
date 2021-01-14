import React from 'react';
import './Banner.scss';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <motion.div
        initial={{opacity: 0, height: 0}}
        animate={{opacity: 1, height: 50, transition: {duration: 1}}}
        exit={{height: 0, opacity: 0, transition:{duration: 1}}} 
        className="banner">
            <h4 className="banner__text">You've reached the limit!</h4>
        </motion.div>
    )
}

export default Banner
