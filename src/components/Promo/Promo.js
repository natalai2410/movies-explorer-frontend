import './Promo.css';
import React from "react";
import NavTab from "../NavTab/NavTab";

const Promo = () => {
    return (
        <div>
            <section className="promo">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <NavTab/>
            </section>
        </div>
    );
}

export default Promo;
