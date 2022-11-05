import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";


function Movies({openPopup}) {

    const [films, setFilms] = useState(null);
    const [filmsInputSearch, setFilmsInputSearch] = useState('');

    const [savedMovies, setSavedMovies] = React.useState([]);

    //const isMovieAdded = (movie) => savedMovies.some((item) => item.id === movie.id);

    function isMovieAdded(films) {
        savedMovies.some((item) => item.id === films.id);
    }

    const onBookmarkClick = (m, isAdded) => (isAdded ? addToBookmarks(m) : removeFromBookmark(m));


    async function handleGetMovies(inputSearch) {
        try {
            const data = await moviesApi.getMovies();
            let filterData = data.filter(({nameRU}) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
            localStorage.setItem('films', JSON.stringify(filterData));
            localStorage.setItem('filmsInputSearch', inputSearch);

            setFilms(filterData);

        } catch (err) {


            setFilms([]);
            localStorage.removeItem('films');
            localStorage.removeItem('filmsTumbler');
            localStorage.removeItem('filmsInputSearch');
        }
    }



    const addToBookmarks = (movie) => {
        const objFilm = {
            image: 'https://api.nomoreparties.co' + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
            movieId: movie.id,
            country: movie.country || '-',
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        };

        mainApi.addMovies(objFilm)
            .then((res) => {
                setSavedMovies([...savedMovies, { ...res, id: res.movieId}]);
            })
            .catch((err) => {
                openPopup(`Ошибка добавления фильма!`, false);
            });
    };

    const removeFromBookmark = (movie) => {
        const movieId = savedMovies.find((item) => item.id === movie.id)._id;
        mainApi.deleteMovies(movieId)
            .then((res) => {
                if (res) {
                    const newArray = savedMovies.filter((item) => item.movieId !== res.movieId);
                    setSavedMovies(newArray);
                }
            })
            .catch((err) => {
                openPopup(`Ошибка удаления фильма!`, false);
            });
    };

    const getSavedMovies = () => {
        mainApi.getMovies()
            .then((data) => {
                const savedArray = data.map((item) => ({ ...item, id: item.movieId }));
                localStorage.setItem('savedMovies', JSON.stringify(savedArray));
                setSavedMovies(savedArray);
            })
            .catch(() => {
                localStorage.removeItem('savedMovies');
                openPopup(`Произошла ошибув!`, false);
            });
    };


    useEffect(() => {
        const localStorageFilms = localStorage.getItem('films');
        const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

        // массив найденных фильмом из локал сторадж
        if (localStorageFilms) {
            //console.log(JSON.parse(localStorageFilms));
            setFilms(JSON.parse(localStorageFilms));
        }

        // строка поиска из локал сторадж
        if (localStorageFilmsInputSearch) {
            //console.log(localStorageFilmsInputSearch);
            setFilmsInputSearch(localStorageFilmsInputSearch);
        }

        const saved = JSON.parse(localStorage.getItem('savedMovies'));
        if (saved) {
            console.log(saved);
            setSavedMovies(saved);
        } else {
            console.log()
            getSavedMovies();
        }


    }, [openPopup]);


    async function getMoviesClick(filmsInputSearch) {

        if (!filmsInputSearch) {
            openPopup('Введите ключевое слово и повторите  поиск!', false)
            return false;
        }

        try {
            const filmsArray = await moviesApi.getMovies();
            let filmsFilter = filmsArray.filter(({nameRU}) =>
                nameRU.toLowerCase().includes(filmsInputSearch.toLowerCase()));


            if (filmsFilter.length > 0) {
                openPopup('Найдено фильмов: ' + filmsFilter.length, true)
            } else {
                openPopup('Ничего не найдено', false)
            }

            //текст запроса, найденные фильмы и состояние переключателя короткометражек сохраняются в хранилище
            localStorage.setItem('films', JSON.stringify(filmsFilter)); // найденные фильмы
            localStorage.setItem('filmsInputSearch', filmsInputSearch);    //текст запроса,
            //ДОБАВИТЬ состояние переключателя короткометражек

        } catch (err) {
            openPopup(`Во время запроса произошла ошибка.       Попробуйте позже.`, false);
            setFilms([]);
            localStorage.removeItem('films');
            localStorage.removeItem('filmsInputSearch');
        }
    }

    return (
        <section>
            <SearchForm
                handleGetMovies={getMoviesClick}
                filmsInputSearch={filmsInputSearch}/>

            {/*{!(films == null) && filmsSaved !== null && (*/}
                <MoviesCardList
                    films={films}
                    onBookmarkClick={onBookmarkClick}
                    isMovieAdded={isMovieAdded}
                />
            {/*)}*/}
        </section>
    );
}

export default Movies;
