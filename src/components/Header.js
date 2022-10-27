import React from 'react';
import { useState } from 'react';
import headerLogo from '../images/header_logo.svg';
import '../index.css';
import {Link, NavLink} from "react-router-dom";


const Header = (props) => {

    const [showItems, setShowItems] = useState(false);
    const handleToggleMenu = () => setShowItems(!showItems);

    return (
        <div className="header">
                <div className={`header__body-auth-on ${props.authOn ? 'header__body-auth-on_active' : ''}`}>
                    <img  className= "header__logo" src={headerLogo} alt="логотип"/>
                    <div className="header__container">
                        <nav className={`header__menu ${showItems ? 'header__menu_active' : ''}`} >
                            <ul className="header__list">
                                <li className="">
                                    <Link to="/" className="header__link">Главная</Link>
                                </li>
                                <li className="">
                                    <div className="header__link" >Фильмы</div>
                                </li>
                                <li className="">
                                    <div className="header__link">Сохранённые фильмы</div>
                                </li>
                            </ul>
                            <button className="header__profile-button" type="button" onClick={handleToggleMenu}>
                                    <Link to="/" className="header__profile-link">Аккаунт</Link>
                            </button>
                        </nav>
                    </div>

                    <button className={`header__burger ${showItems ? 'header__burger_active' : ''}`} onClick={handleToggleMenu}>
                        <span className={`${showItems ? 'header__burger_active' : ''}`}></span>
                    </button>
                </div>

            <div className={`header__body-auth-off ${props.authOn ? '' : 'header__body-auth-off_active'}`}>
                <img  className= "header__logo header__logo_auth-off" src={headerLogo} alt="логотип"/>
                <div className="header__container header__container_auth-off">
                    <Link to="/" className="header__link header__link_auth-off">Регистрация</Link>
                    <button className="header__login-button" type="button" onClick={handleToggleMenu}>
                        <Link to="/" className="header__profile-link header__profile-link_black">Войти</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Header;
