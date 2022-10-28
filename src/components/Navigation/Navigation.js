import React from "react";
import './Navigation.css';
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
        <nav className={`navigation__menu ${props.showItems ? "navigation__menu_active" : ""}`}>
            <ul className="navigation__list">
                <li className="">
                    <Link to="/" className="navigation__link">Главная</Link>
                </li>
                <li className="">
                    <div className="navigation__link">Фильмы</div>
                </li>
                <li className="">
                    <div className="navigation__link">Сохранённые фильмы</div>
                </li>
            </ul>
            <button className="navigation__profile-button" type="button" onClick={props.onClick}>
                <Link to="/" className="navigation__profile-link">Аккаунт</Link>
            </button>
        </nav>
    );
}

export default Navigation;
