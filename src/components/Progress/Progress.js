import React from 'react';
import './Progress.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useNominations } from '../../contexts/NominationsContext';

const Progress = () => {
    const { noms } = useNominations();
    return (
        <div className="progress">
            <div className="progress__bar">
            {noms.length === 0 && <p className="progress__notice">You have no movies nominated!</p>}
                <AnimatePresence>
                    {noms.map((m,i)=>{
                        return <motion.div
                        initial={{width: 0}}
                        animate={{width: "20%"}}
                        exit={{opacity: 0, width: 0 }} 
                        key={i} className="progress__bar-sec"/>
                    })}
                </AnimatePresence>
            </div>
            <p className="progress__track" style={noms.length === 5 ? {background: "#268060"} : null}>{noms.length}/5</p>
        </div>
    )
}

export default Progress
