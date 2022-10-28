import React from 'react';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

//
// function handleMore() {
//
// }


import tempCard0 from '../../images/film_Avatar_1304.jpg';


const films = [
    {
        id: 1,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
        filmsSaved: true
    },
    {
        id: 2,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 3,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 4,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 5,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 6,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 7,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 8,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 9,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 10,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 11,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
    {
        id: 12,
        title: '33 слова о дизайне',
        duration: '1ч 47м',
        img: tempCard0,
    },
];


function MoviesCardList(props) {
    const { pathname } = useLocation();


    return (
        <section className="cards">
            <ul className="cards__list">
                {films.map((movieData) => (
                        <MoviesCard/>
                ))}
            </ul>

            {films.length > 0 && pathname !== '/saved-movies' && (
                    <div className="cards__button-container">
                        <button className="cards__button" type="button" name="more" onClick={props.handleMore}>Ещё</button>
                    </div>
                )
            }
        </section>
    );
}

export default MoviesCardList;
