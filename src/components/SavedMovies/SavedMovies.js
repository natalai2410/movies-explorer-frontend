import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";


function SavedMovies({openPopup}) {

    return (
        <section>
            <SearchForm
                //handleGetMovies={handleGetMovies}
                // filmsInputSearch={filmsInputSearch}
            />

            <MoviesCardList
                // films={films}
                // onBookmarkClick={onBookmarkClick}
            />
        </section>
    );
}

export default SavedMovies;
