import React from 'react';
import './Nominations.scss';
import { useNominations } from '../../contexts/NominationsContext';


const Nominations = ({nom, handleDelete}) => {
    const { noms, deleteFilm } = useNominations();

    return (
        <div className="nominations">
            <h3 className="nominations__title">Nominations</h3>
            {noms.length === 0 && <p>You have no movies nominated!</p>}
            <ul className="nominations__list">
                {noms.map(n => {
                return( 
                <li className="nominations__movie"key={`${n.imdbID}noM`} id={n.imdbID}>
                    <p className="nominations__movie-name">{n.Title} ({n.Year})</p>
                    <button className="nominations__btn"onClick={()=>{deleteFilm(n.imdbID)}}>Delete</button>
                </li>
                )
                })}
            </ul>
        </div>
    )
}

export default Nominations
