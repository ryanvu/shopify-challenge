import React, { useState } from 'react';
import './Nominations.scss';
import { useNominations } from '../../contexts/NominationsContext';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../Banner/Banner';

const nominanimation = {
    hidden:{
        y: "-200%"
    },
    visible:{
        y:"0%",
        transition:{
            duration: 1,
            type: "spring"
        }
    }
}

const Nominations = () => {
    const { noms, deleteFilm } = useNominations();

    return (
        <div className="nominations">
            <h3 className="nominations__title">Nominations</h3>
            {noms.length === 0 && <p>You have no movies nominated!</p>}
            <AnimatePresence>
                {noms.length === 5 ? <Banner /> : null}
            </AnimatePresence>
            <ul className="nominations__list">
                {noms.map(n => {
                return(
                        <motion.li initial="hidden" animate="visible" variants={nominanimation}className="nominations__movie"key={`${n.imdbID}noM`} id={n.imdbID}>
                            <p className="nominations__movie-name">{n.Title} ({n.Year})</p>
                            <button className="nominations__btn"onClick={()=>{deleteFilm(n.imdbID)}}>Delete</button>
                        </motion.li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Nominations
