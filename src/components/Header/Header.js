import React from 'react';
import {useState} from 'react';
import headerLogo from '../../images/header_logo.svg';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = (props) => {

    // const [showItems, setShowItems] = useState(false);
    // const handleToggleMenu = () => setShowItems(!showItems);

    return (

        <header className="header">
            <div className={`header__body-auth-on ${props.authOn ? 'header__body-auth-on_active' : ''}`}>
                <Link to="/" className="navigation__link">
                    <img className="header__logo" src={headerLogo} alt="логотип"/>
                </Link>
                <div className="header__container">
                    <Navigation showItems={props.showItems} onClick={props.handleToggleMenu}/>
                </div>
                <button className={`header__burger ${props.showItems ? 'header__burger_active' : ''}`}
                        onClick={props.handleToggleMenu}>
                    <span className={`${props.showItems ? 'header__burger_active' : ''}`}></span>
                </button>
            </div>
            <div className={`header__body-auth-off ${props.authOn ? '' : 'header__body-auth-off_active'}`}>
                <img className="header__logo header__logo_auth-off" src={headerLogo} alt="логотип"/>
                <ul className="header__container header__container_auth-off">
                    <li className="header__item">
                        <Link to="/signup" className="header__link header__link_auth-off">Регистрация</Link>
                    </li>
                    <li className="header__item">
                        <button className="header__login-button" type="button" onClick={props.handleToggleMenu}>
                            <Link to="/signin" className="header__profile-link header__profile-link_black">Войти</Link>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}


export default Header;
