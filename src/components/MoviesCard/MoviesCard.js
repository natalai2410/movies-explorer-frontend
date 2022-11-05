import React, {useEffect, useState} from 'react';
import './MoviesCard.css';
import {useLocation} from "react-router-dom";


// filmsSavedArr - массив сохраненных фильмов

function MoviesCard({film, onBookmarkClick, isMovieAdded}) {
    const {pathname} = useLocation();


    function calcDurationMins(mins) {
        return `${Math.floor(mins / 60)} ч ${mins % 60} м`;
    }

    const isAdded = isMovieAdded(film);

    const handleBookmarkClick = (e) => {
        e.preventDefault();
        onBookmarkClick(film, !isAdded);
    };

    const removeHandler = () => {
        onBookmarkClick(film, false);
    };

    return (
        <li className="card">
            <div className="card__content">
                <div className="card__text">
                    <div className="card__title">{film.nameRU}</div>
                    <div className="card__duration"> {calcDurationMins(film.duration)}</div>
                </div>
                {pathname === '/saved-movies' ? (
                    <button type="button"
                            className="card__button card__button_delete"
                            onClick={removeHandler}
                    />
                ) : (
                    <button type="button"
                            className={`card__button card__button${isAdded ? '_active' : '_inactive'}`}
                            onClick={handleBookmarkClick}/>
                )}
            </div>
            <a className="" href={pathname === '/saved-movies' ? film.trailer : film.trailerLink} target="_blank"
               rel="noreferrer">
                <img className="card__image"
                     src={pathname === '/saved-movies' ? `${film.image}` : `https://api.nomoreparties.co${film.image.url}`}
                     alt={film.nameRU}></img>
            </a>
        </li>
    );
}

export default MoviesCard;
