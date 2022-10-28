import React from "react";
import './Portfolio.css';

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <div className="portfolio__item">
                <a className="portfolio__site" href="https://github.com/natalai2410/how-to-learn">Статичный сайт</a>
                <div className="portfolio__arrow">↗</div>
            </div>
            <div className="portfolio__item">
                <a className="portfolio__site" href="src/components/Main/Main" target="_blank" rel="noreferrer" >Адаптивный сайт</a>
                <div className="portfolio__arrow">↗
                </div>
            </div>
            <div className="portfolio__item">
                <a className="portfolio__site" href="src/components/Main/Main" target="_blank" rel="noreferrer">Одностраничное приложение</a>
                <div className="portfolio__arrow">↗</div>
            </div>
        </div>
    );
}

export default Portfolio;
