import React from 'react';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

// const films = [
//     {
//         id: 1,
//         nameRU: 'Круэлла',
//         duration: '214',
//         image: 'https://static.kinoafisha.info/k/movie_posters/220/upload/movie_posters/2/4/5/8326542/b32eeb3d1b78ca35001bd57fdf074c5b.jpg',
//         filmsSaved: true
//     },
//     {
//         id: 2,
//         title: 'Мстители',
//         duration: '137',
//         image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
//     },
//     {
//         id: 3,
//         title: 'Тор',
//         duration: '110м',
//         image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/8674c9c7-6ec6-4c90-8642-7b0741d87dac/300x450',
//     },
//     {
//         id: 4,
//         title: '33 слова о дизайне',
//         duration: '147м',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 5,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 6,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 7,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 8,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 9,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 10,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 11,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
//     {
//         id: 12,
//         title: '33 слова о дизайне',
//         duration: '147',
//         image: 'https://voprosfen.com/wp-content/uploads/2022/03/30-571x400.png',
//     },
// ];


function MoviesCardList({
                            films,
                            onBookmarkClick,
                            filmsSaved,
}) {
    const { pathname } = useLocation();

    return (
        <section className="cards">

            { !(films == null) ? (
                 (films.length > 0)  ? (
            <ul className="cards__list">
                {films.map((film) => (
                    <MoviesCard
                        key={film.id || film.movieId}
                        film={film}
                        onBookmarkClick={onBookmarkClick}
                        filmsSaved={filmsSaved}
                    />
                ))}
            </ul>
            )  : '' ): '' }

            {/*{films.length > 0 && pathname !== '/saved-movies' && (*/}
            {/*        <div className="cards__button-container">*/}
            {/*            <button className="cards__button" type="button" name="more">Ещё</button>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}

        </section>
    );
}



export default MoviesCardList;
