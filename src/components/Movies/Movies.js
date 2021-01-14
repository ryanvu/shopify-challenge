import React, { useState } from 'react';
import './Movies.scss';
import { useNominations } from '../../contexts/NominationsContext';

import { motion } from 'framer-motion';

const Movies = ({input, loading, result}) => {

    const { noms, nominateFilm } = useNominations();
    const nominatedList = noms.map(n=>{return n.imdbID})
    
    console.log(result)
    return (
        <div className="movies">
            {input === "" && <p className="movies__help">Please search for a movie!</p>}
            {input && <p className="movies__result">search result for '{input}'</p>}
            {result.length ===  0 && <p>Search for a movie</p> }
            {!loading && result.Response === "True" &&
            
          <ul className="movies__list">
            {result.Search.map((m) => {
              return (
              <li className="movies__list-item" key={m.imdbID} id={m.imdbID}>
                    <p className="movies__title">{m.Title} ({m.Year}) </p>
                  
                {!nominatedList.includes(m.imdbID) ? 
                <motion.button 
                whileHover={{scale: 1.1}}
                className="movies__btn" onClick={()=>{nominateFilm(m)}}>Nominate</motion.button> : 
                <button className="movies__btn-disabled" disabled onClick={()=>{nominateFilm(m)}}>Nominated</button>}
              </li>
              )
            })}
          </ul>
       
        }
        {!loading && result.Response === "False" && 
          <p className="movies__error">{result.Error === "Incorrect IMDb ID." ? "" : result.Error}</p>
        }
        {loading && <p>loading..</p>}
        </div>
    )
}

export default Movies
