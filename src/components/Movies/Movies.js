import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";


function Movies({openPopup, isLoading}) {

    const [films, setFilms] = useState(null);
    const [filmsInputSearch, setFilmsInputSearch] = useState('');
    const [filmsSaved, setFilmsSaved] = useState([]);

    const [preloader, setPreloader] = useState(false);
    const [error, setError] = useState(false);

    async function onBookmarkClick(film, isAdded) {
        if (isAdded) {
            const jsonFilm = {
                image: 'https://api.nomoreparties.co' + film.image.url,
                trailerLink: film.trailerLink,
                thumbnail: 'https://api.nomoreparties.co' + film.image.url,
                movieId: film.id,
                country: film.country || 'Неизвестно',
                director: film.director,
                duration: film.duration,
                year: film.year,
                description: film.description,
                nameRU: film.nameRU,
                nameEN: film.nameEN,
            };
            try {
                await mainApi.addMovies(jsonFilm);
                const newSaved = await mainApi.getMovies();
                setFilmsSaved(newSaved);
            } catch {
                openPopup(`Ошибка добавления фильма!`, false);
            }
        } else {
            try {
                await mainApi.deleteMovies(film._id);
                const newSaved = await mainApi.getMovies();
                setFilmsSaved(newSaved);
            } catch (err) {
                openPopup(`Ошибка удаления фильма!`, false);
            }
        }
    }

    useEffect(() => {
        // массив найденных фильмом из локал сторадж
        const localStorageFilms = localStorage.getItem('films');
        // строка поиска из локал сторадж
        const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

        mainApi.getMovies()
            .then((data) => {
                setFilmsSaved(data);
            })
            .catch((err) => {
                openPopup({err}, false);
            });

        if (localStorageFilms) {
            setFilms(JSON.parse(localStorageFilms));
            setPreloader(false);
        }

        if (localStorageFilmsInputSearch) {
            setFilmsInputSearch(localStorageFilmsInputSearch);
        }

    }, [openPopup]);

    //событие  нажатия на  поиск
    async function handleGetMovies(filmsInputSearch) {

        if (!filmsInputSearch) {
            openPopup('Введите ключевое слово и повторите  поиск!', false)
            setError(true);
            return false;
        }

        setError(false);
        setPreloader(true);

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
            setError(true);
            localStorage.removeItem('films');
            localStorage.removeItem('filmsInputSearch');
        }
        finally {
        setPreloader(false);
    }
    }

    return (
        <section>
            <SearchForm
                handleGetMovies={handleGetMovies}
                filmsInputSearch={filmsInputSearch}/>

            {preloader && <Preloader />}

            {!preloader && !error && films !== null && filmsSaved !== null  && (
                <MoviesCardList
                    films={films}
                    onBookmarkClick={onBookmarkClick}
                    filmsSaved={filmsSaved}
                />
            )}
        </section>
    );
}

export default Movies;
