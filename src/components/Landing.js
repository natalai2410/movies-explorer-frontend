import React from 'react';
import avatar from '../images/film_Avatar_1304.jpg';
import '../index.css';

const Landing = () => {
    return (
        <div className="landing">
            <section className="hero">
                <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
                <div className="hero__links">
                    <button className="hero__button" type="button">
                        <a href="" className="hero__link">О проекте</a>
                    </button>
                    <button className="hero__button" type="button">
                        <a href="" className="hero__link">Технологии</a>
                    </button>

                    <button className="hero__button" type="button">
                       <a href="" className="hero__link">Студент</a>
                    </button>
                </div>
            </section>
            <section className="about">
                <h2 className="landing__section-title">О проекте</h2>
                <div className="about__content">
                    <div className="about__stage-table">
                        <h3 className="stage-table__title">Дипломный проект включал 5 этапов</h3>
                        <p className="stage-table__text">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about__stage-table">
                        <h3 className="stage-table__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="stage-table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                            было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about__time-table">
                    <div className="about__table-item about__table-item_green ">
                        <h3 className="time-table__title">1 неделя</h3>
                    </div>
                    <div className="about__table-item about__table-item_grey">
                        <h3 className="time-table__title">4 недели</h3>
                    </div>
                    <div className="about__table-item">
                        <h3 className="time-table__description">Back-end</h3>
                    </div>
                    <div className="about__table-item">
                        <h3 className="time-table__description">Front-end</h3>
                    </div>
                </div>
            </section>
            <section className="tech">
                <h3 className="landing__section-title landing__section-title_70">Технологии</h3>
                <h2 className="tech__title">7 технологий</h2>
                <p className="tech__description">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="tech__technology">
                    <li className="tech__item">HTML</li>
                    <li className="tech__item">CSS</li>
                    <li className="tech__item">JS</li>
                    <li className="tech__item">React</li>
                    <li className="tech__item">Git</li>
                    <li className="tech__item">Express.js</li>
                    <li className="tech__item">mongoDB</li>
                </ul>
            </section>
            <section className="student">
                <h3 className="landing__section-title">Студент</h3>
                <div className="student__content">
                    <div className="student__info">
                        <h3 className="student__title">Наталья</h3>
                        <p className="student__subtitle">Фронтенд-разработчик, 32 года</p>
                        <p className="student__description">
                            Я родилась и живу в Мурманске, закончила факультет информатики и управления.
                            У меня есть муж и дочь.
                            Я люблю реставрировать мебель и создавать предметы интерьера.
                            С 2019 года работаю в компании «Норильский Никель».
                            После того, как прошла курс по веб-разработке мне стали поручать задачи связанные с
                            написанием сайтов отдела.
                        </p>
                        <ul className="student__links">
                            <li><a className="student__link" href="" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a className="student__link" href="" target="_blank" rel="noreferrer">Github</a></li>
                        </ul>
                    </div>
                    <img src={avatar} alt="student" className="student__avatar"/>
                </div>
                <div className="portfolio">
                    <h4 className="portfolio__title">Портфолио</h4>
                    <div className="portfolio__item">
                        <a className="portfolio__site" href="https://github.com/natalai2410/how-to-learn">Статичный сайт</a>
                        <div className="portfolio__arrow">↗</div>
                    </div>
                    <div className="portfolio__item">
                        <a className="portfolio__site" href="https://natalai2410.github.io/russian-travel/"   target="_blank" rel="noreferrer" >Адаптивный сайт</a>
                        <div className="portfolio__arrow">↗
                        </div>
                    </div>
                    <div className="portfolio__item">
                        <a className="portfolio__site" href="https://zvyagina.students.nomoredomains.club/"   target="_blank" rel="noreferrer">Одностраничное приложение</a>
                        <div className="portfolio__arrow">↗</div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Landing;
