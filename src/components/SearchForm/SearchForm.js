import './SearchForm.css';
import { useEffect, useState } from 'react';

import ico1 from "../../images/icon__CCOLOR_icon-2.svg";
import headerLogo from "../../images/header_logo.svg";


const SearchForm = () => {

    const [switchSearch, setSwitchSearch] = useState(false);
    const [inputSearch, setInputSearch] = useState('');

    function handleInputChange(e) {

    }

    function handleSwitchChange(e) {
        const newSwitchSearch = !switchSearch;
    }

    function handleSubmit(e) {

    }
    
    return (
        <form className="search">
            <div className="search__content">
                <div className="search__string-content">
                    <img className="search__ico" src={ico1}  alt="логотип"></img>
                    <input className="search__input" placeholder="Фильм" type="text" value={inputSearch || ''} onChange={handleInputChange} required />
                    <button type="submit" className="search__button" onClick={handleSubmit}></button>
                </div>

                <div className="search__toggle">
                    <label className="search__tumbler">
                        <input className="search__checkbox" type="checkbox" onChange={handleSwitchChange} />
                        <span className="search__slider" />
                    </label>
                    <p className="search__films">Короткометражки</p>
                </div>
            </div>
        </form>
    );
};
    export default SearchForm;
