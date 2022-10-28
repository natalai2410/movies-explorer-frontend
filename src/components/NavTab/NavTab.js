import './NavTab.css';
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavTab = () => {
    return (
        <div>
            <div className="nav-tab__links">
                <button className="nav-tab__button" type="button">
                    <Link to="about-project" className="nav-tab__link">О проекте</Link>
                </button>
                <button className="nav-tab__button" type="button">
                    <Link to="techs" className="nav-tab__link">Технологии</Link>
                </button>
                <button className="nav-tab__button" type="button">
                    <Link to="about-me" className="nav-tab__link">Студент</Link>
                </button>
            </div>
        </div>
    );
}

export default NavTab;
