import './NavTab.css';
import React from "react";

const NavTab = () => {
    return (
        <div>
            <div className="nav-tab__links">
                <button className="nav-tab__button" type="button">
                    <a href="" className="nav-tab__link">О проекте</a>
                </button>
                <button className="nav-tab__button" type="button">
                    <a href="" className="nav-tab__link">Технологии</a>
                </button>
                <button className="nav-tab__button" type="button">
                    <a href="" className="nav-tab__link">Студент</a>
                </button>
            </div>
        </div>
    );
}

export default NavTab;
