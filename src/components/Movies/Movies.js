import React, {useEffect, useState} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies() {
    return (
        <section>
            <SearchForm/>
            <MoviesCardList/>
        </section>
    );
}

export default Movies;
