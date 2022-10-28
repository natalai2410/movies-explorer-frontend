import React from "react";
import './AboutMe.css';
import avatar from "../../images/film_Avatar_1304.jpg";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
    return (
        <section className="about-me">
            <h3 className="main__section-title">Студент</h3>
            <div className="about-me__content">
                <div className="about-me__info">
                    <h3 className="about-me__title">Наталья</h3>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__description">
                        Я родилась и живу в Мурманске, закончила факультет информатики и управления.
                        У меня есть муж и дочь.
                        Я люблю реставрировать мебель и создавать предметы интерьера.
                        С 2019 года работаю в компании «Норильский Никель».
                        После того, как прошла курс по веб-разработке мне стали поручать задачи связанные с
                        написанием сайтов отдела.
                    </p>
                    <ul className="about-me__links">
                        <li><a className="about-me__link" href="src/components/Main/Main" target="_blank"
                               rel="noreferrer">Facebook</a></li>
                        <li><a className="about-me__link" href="src/components/Main/Main" target="_blank"
                               rel="noreferrer">Github</a></li>
                    </ul>
                </div>
                <img src={avatar} alt="about-me" className="about-me__avatar"/>
            </div>
            <Portfolio/>
        </section>
    );
}

export default AboutMe;
