import React from 'react';
import './Error.scss';
import boom from '../../assets/toomany.svg';
import huh from '../../assets/notfound.svg';

const ErrorSwitch = (msg) => {
    switch(msg){
        case "Too many results.":
            return {img: boom, error: msg};
        case "Movie not found!":
            return {img: huh, error: msg}; 
    }
}

const Error = ({err}) => {

    return (
        <div className="error">
            <img className="error__img"src={ErrorSwitch(err).img} alt={ErrorSwitch(err).error}/>
            <p className="error__msg">{ErrorSwitch(err).error}</p>
        </div>
    )
}

export default Error
