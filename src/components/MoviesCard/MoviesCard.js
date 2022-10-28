import React, { useState } from 'react';
import './MoviesCard.css';
import {useLocation} from "react-router-dom";

function handleFavoriteDelete() {

}

function handleFavoriteToogle() {

}

function MoviesCard({ cardData, isRenderInSaved }) {

    const [isAdded, setIsAdded] = useState(false);
    const tempHandleClick = () => setIsAdded(!isAdded);
    const { pathname } = useLocation();

    return (

        // <li className="card">
        //     <a className="card__image-content" href={pathname === '/saved-movies' ? cardData.trailer : cardData.trailerLink} target="_blank"  rel="noreferrer">
        //         <img className="card__image" src={`${cardData.image}`}   alt={cardData.nameRU}></img>
        //     </a>
        //     <div className="card__element">
        //         <p className="card__title">{cardData.nameRU}</p>
        //         <div className="card__buttons">
        //
        //             {pathname === '/saved-movies' ? (
        //                 <button type="button" className="card__button card__button_delete"/>
        //             ) : (
        //                 <button type="button" className={`card__button card__button_active`} />
        //             )}
        //
        //         </div>
        //     </div>
        //     {/*<p className="card__duration">{getMovieDuration(film.duration)}</p>*/}
        // </li>


        <li className="movie-card">
            {/*<div className="movie-card__header">*/}
            {/*    <div className="movie-card__meta-container">*/}
            {/*        <h4 className="movie-card__title">{cardData.title}</h4>*/}
            {/*        <p className="movie-card__duration">{cardData.duration}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<img*/}
            {/*    className="movie-card__image"*/}
            {/*    src={cardData.img}*/}
            {/*    alt={`Фотография к фильму ${cardData.title}`}*/}
            {/*/>*/}
        </li>
    );
}

export default MoviesCard;
