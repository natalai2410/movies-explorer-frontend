import React from 'react';
import {useState} from 'react';
import headerLogo from '../../images/header_logo.svg';
import './Header.css';
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = (props) => {

    const [showItems, setShowItems] = useState(false);
    const handleToggleMenu = () => setShowItems(!showItems);

    return (

        <div className="header">
            <div className={`header__body-auth-on ${props.authOn ? 'header__body-auth-on_active' : ''}`}>
                <img className="header__logo" src={headerLogo} alt="логотип"/>
                <div className="header__container">
                    <Navigation showItems={showItems} onClick={handleToggleMenu}/>
                </div>
                <button className={`header__burger ${showItems ? 'header__burger_active' : ''}`}
                        onClick={handleToggleMenu}>
                    <span className={`${showItems ? 'header__burger_active' : ''}`}></span>
                </button>
            </div>
            <div className={`header__body-auth-off ${props.authOn ? '' : 'header__body-auth-off_active'}`}>
                <img className="header__logo header__logo_auth-off" src={headerLogo} alt="логотип"/>
                <div className="header__container header__container_auth-off">
                    <Link to="/signup" className="header__link header__link_auth-off">Регистрация</Link>
                    <button className="header__login-button" type="button" onClick={handleToggleMenu}>
                        <Link to="/signin" className="header__profile-link header__profile-link_black">Войти</Link>
                    </button>
                </div>
            </div>
        </div>



    );
}


export default Header;
