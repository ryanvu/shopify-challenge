import React from 'react';
import './Search.scss';

const Search = ({ handleChange }) => {
    return (
        <div className="search">
            <label htmlFor="movieSearch" className="search__label">Movie Title</label>
            <input onChange={handleChange} className="search__input"type="text" placeholder="e.g. Inception, Avengers, etc."/>
            <span className="search__help">Search up the title of a movie!</span>
        </div>
    )
}

export default Search
