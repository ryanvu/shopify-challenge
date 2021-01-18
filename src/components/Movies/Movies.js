import React from 'react';
import './Movies.scss';
import { useNominations } from '../../contexts/NominationsContext';

import Error from '../Error/Error';

import { motion } from 'framer-motion';

const Movies = ({input, loading, result}) => {

    const { noms, nominateFilm } = useNominations();
    const nominatedList = noms.map(n=>{return n.imdbID})

    return (
        <div className="movies">
            {input === "" && <p className="movies__help">Please search for a movie!</p>}
            {input && <p className="movies__result">search result for '{input}'</p>}
            {result.length ===  0 && <p>Search for a movie</p> }
            {!loading && result.Response === "True" &&
       
          <motion.ul 
          initial={{height: "0"}}
          animate={{height: "100%"}}
          transition={{duration: 0.5, type:"tween", staggerChildren: 0.5}}
          className="movies__list">
            {result.Search.map((m, i) => {
              return (
              <motion.li 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: Number.parseFloat(`0.${i}`) + 0.1}}
              className="movies__list-item" key={m.imdbID} id={m.imdbID}>
                    <p className="movies__title">{m.Title} ({m.Year}) </p>
                  
                {!nominatedList.includes(m.imdbID) ? 
                <button
                className="movies__btn" onClick={()=>{nominateFilm(m)}}>Nominate</button> : 
                <button className="movies__btn-disabled" disabled onClick={()=>{nominateFilm(m)}}>Nominated</button>}
              </motion.li>
              )
            })}
          </motion.ul>  
        }
        {!loading && result.Response === "False" && result.Error !== "Incorrect IMDb ID." && 
        <Error err={result.Error}/>
        }
        {loading && <p>loading..</p>}
        </div>
    )
}

export default Movies
