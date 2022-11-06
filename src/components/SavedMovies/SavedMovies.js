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

    const [filmsSwitch, setFilmsSwitch] = useState(false);

    const [deleteClick, setDeleteClick,] = useState(false);

    const filterShortFilm = (moviesToFilter) => moviesToFilter.filter((item) => item.duration <= 40);

    async function onBookmarkClick(film, isDelete) {
        try {
            await mainApi.deleteMovies(film._id);
            const newSaved = await mainApi.getMovies();
            setDeleteClick(!isDelete)
            setFilmsSaved(newSaved);

        } catch (err) {
            openPopup(`Ошибка удаления фильма!`, false);
        }
    }

    useEffect(() => {
        mainApi.getMovies()
            .then((data) => {
                setFilmsArr(data);
            })
            .catch((err) => {
                openPopup({err}, false);
            });
    }, [deleteClick]);


    useEffect(() => {
        const checkbox = localStorage.getItem('filmsSwitchSaved');
        setFilmsSwitch(checkbox === 'true');

        mainApi.getMovies()
            .then((data) => {
                setFilmsArr(data);

            })
            .catch((err) => {
                openPopup({err}, false);
            });

    }, [openPopup]);


    useEffect(() => {
        const checkbox = localStorage.getItem('filmsSwitchSaved');
        setFilmsSwitch(checkbox === 'false');
    }, [filmsSwitch]);


    async function handleGetFilmsSwitch() {
        setFilmsSwitch(!filmsSwitch);
        localStorage.setItem('filmsSwitchSaved', filmsSwitch);
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

            setFilmsArr(filmsFilter);

            if (filmsFilter.length == 0) {
                openPopup('Ничего не найдено', false)
            }

            //localStorage.setItem('filmsInputSearchSaved', filmsInputSearch);    //текст запроса,
            localStorage.setItem('filmsSwitchSaved', filmsSwitch);    //переключатель,

        } catch (err) {
            openPopup(`Во время запроса произошла ошибка.       Попробуйте позже.`, false);
            setFilmsArr([]);
            setError(true);
            //localStorage.removeItem('filmsSaved');
            localStorage.removeItem('filmsInputSearchSaved');
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
                    // films={filmsArr}
                    onBookmarkClick={onBookmarkClick}
                    filmsSaved={filmsSaved}
                />
            )}
        </section>
    );
}

export default SavedMovies;
