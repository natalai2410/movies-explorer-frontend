import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";


function Movies({openPopup}) {

    const [films, setFilms] = useState(null);
    const [filmsInputSearch, setFilmsInputSearch] = useState('');

    useEffect(() => {
        const localStorageFilms = localStorage.getItem('films');
        const localStorageInputSearch = localStorage.getItem('filmsInputSearch');

        if (localStorageFilms) {
            setFilms(JSON.parse(localStorageFilms));
            console.log('Введите ключевое слово и повторите  поиск!', false)
        }

        if (localStorageInputSearch) {
            setFilmsInputSearch(localStorageInputSearch);
        }

    }, [openPopup])

    async function handleGetMovies(filmsInputSearch) {
        if (!filmsInputSearch) {
            openPopup('Введите ключевое слово и повторите  поиск!', false)
            return false;
        }

        try {
            const filmsArray = await moviesApi.getMovies();
            let filmsData = filmsArray.filter(({nameRU}) =>
                nameRU.toLowerCase().includes(filmsInputSearch.toLowerCase()));

            openPopup('Найдено фильмов: ' + filmsData.length, true)

            if (filmsData.length > 0) {
                openPopup('Найдено фильмов: ' + filmsData.length, true)
            }
            else {
                openPopup('Ничего не найдено', false)
            }

            //текст запроса, найденные фильмы и состояние переключателя короткометражек сохраняются в хранилище
            localStorage.setItem('films', JSON.stringify(filmsData)); // найденные фильмы
            localStorage.setItem('filmsInputSearch', filmsInputSearch);    //текст запроса,
            //ДОБАВИТЬ состояние переключателя короткометражек

        } catch (err) {
            openPopup(`Упс... Что-то пошло не так: ${err}`, false);

            setFilms([]);
            localStorage.removeItem('films');
            localStorage.removeItem('filmsInputSearch');
        }
    }

    return (
        <section>
            <SearchForm
                handleGetMovies={handleGetMovies}
                filmsInputSearch={filmsInputSearch}/>
            <MoviesCardList/>
        </section>
    );
}

export default Movies;
