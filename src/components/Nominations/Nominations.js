import React from 'react';
import './Nominations.scss';
import { useNominations } from '../../contexts/NominationsContext';


const Nominations = ({nom, handleDelete}) => {
    const { noms, deleteFilm } = useNominations();

    return (
        <div className="nominations">
            <h3 className="nominations__title">nominations</h3>
            <ul className="nominations__list">
                {noms.map(n => {
                return( 
                <li className="nominations__movie"key={`${n.imdbID}noM`} id={n.imdbID}>
                    {n.Title}
                    <button className="nominations__btn"onClick={()=>{deleteFilm(n.imdbID)}}>deleto</button>
                </li>
                )
                })}
            </ul>
        </div>
    )
}

export default Nominations
