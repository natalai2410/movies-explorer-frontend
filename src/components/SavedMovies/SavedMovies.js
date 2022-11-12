import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";


function SavedMovies({openPopup}) {
    const [filmsArr, setFilmsArr] = useState([]);
    const [filmsInputSearch, setFilmsInputSearch] = useState('');
    const [filmsSaved, setFilmsSaved] = useState([]);

    const [preloader, setPreloader] = useState(false);
    const [error, setError] = useState(false);

    const [filmsSwitch, setFilmsSwitch] = useState(true);

    const [deleteClick, setDeleteClick,] = useState(false);

    const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

    async function onBookmarkClick(film) {
        try {
            await mainApi.deleteMovies(film._id);
            const newSaved = await mainApi.getMovies();
            setDeleteClick(!deleteClick)
            setFilmsSaved(newSaved);

            localStorage.setItem('filmsSaved', JSON.stringify(newSaved));

        } catch (err) {
            openPopup(`Ошибка удаления фильма!`, false);
        }
    }

    useEffect(() => {

        const localStorageFilmsSaved = localStorage.getItem('filmsSaved');

        if (localStorageFilmsSaved) {
            setFilmsArr(JSON.parse(localStorageFilmsSaved));
        }

        else {
            mainApi.getMovies()
                .then((data) => {
                    setFilmsArr(data);
                })
                .catch((err) => {
                    openPopup({err}, false);
                });
        }
    }, [deleteClick]);


    async function handleGetFilmsSwitch() {
        setFilmsSwitch(!filmsSwitch);
    }

    async function handleGetMovies(filmsInputSearch) {

        if (!filmsInputSearch) {
            openPopup('Введите ключевое слово и повторите  поиск!', false)
            return false;
        }

        setError(false);
        setPreloader(true);

        try {
            const filmsArray = filmsArr;
            let filmsFilter = filmsArray.filter(({nameRU}) => nameRU.toLowerCase().includes(filmsInputSearch.toLowerCase()));


            if ( filmsFilter.length > 0) {
                if (filmsSwitch) {
                    openPopup('Найдено фильмов: ' + filmsFilter.length, true)
                    setFilmsArr(filmsFilter);
                }

                if (!filmsSwitch) {
                    openPopup('Найдено фильмов: ' + filterShortFilm(filmsFilter).length, true)
                    setFilmsArr(filmsFilter);
                }


            } else {
                openPopup('Ничего не найдено', false)
                setFilmsArr(filmsArr);
            }

        } catch (err) {
            openPopup(`Во время запроса произошла ошибка.       Попробуйте позже.`, false);
            setFilmsArr([]);
            setError(true);
        } finally {
            setPreloader(false);
        }
    }

    return (
        <section>
            <SearchForm
                handleGetMovies={handleGetMovies}
                filmsInputSearch={filmsInputSearch}
                handleGetFilmsSwitch={handleGetFilmsSwitch}
                filmsSwitch={filmsSwitch}
            />

            {preloader && <Preloader/>}
            {!preloader && !error && (
                <MoviesCardList
                    films={filmsSwitch ? filmsArr : filterShortFilm(filmsArr)}
                    onBookmarkClick={onBookmarkClick}
                    filmsSaved={filmsSaved}
                />
            )}
        </section>
    );
}

export default SavedMovies;
