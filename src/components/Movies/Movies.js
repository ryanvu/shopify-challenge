import React from 'react';
import './Movies.scss';
import { useNominations } from '../../contexts/NominationsContext';

const Movies = ({input, loading, result}) => {

    const { noms, nominateFilm } = useNominations();
    const nominatedList = noms.map(n=>{return n.imdbID})
    return (
        <div className="movies">
            {input === "" && <p className="movies__help">Please search for a movie!</p>}
            {input && <p className="movies__result">search result for '{input}'</p>}
            {!loading && result.Response === "True" &&
    
          <ul className="movies__list">
            {result.Search.map((m) => {
              return (
              <li className="movies__list-item" key={m.imdbID} id={m.imdbID}>
                <p className="movies__title">{m.Title}</p>
                {!nominatedList.includes(m.imdbID) ? 
                <button className="movies__btn" onClick={()=>{nominateFilm(m)}}>nom</button> : 
                <button className="movies__btn" disabled onClick={()=>{nominateFilm(m)}}>nominated</button>}
              </li>
              )
            })}
          </ul>
       
        }
        {!loading && result.Response === "False" && 
          <p className="movies__error">{result.Error}</p>
        }
        {loading && <p>loading..</p>}
        </div>
    )
}

export default Movies
