import React from "react";
import './InfoTooltip.css';

const InfoTooltip = ({ text, isOpen, onClose }) => {
    return (
        <section className={`info-tooltip ${isOpen ? 'info-tooltip_opened' : ''}`}>
            <div className="info-tooltip__content">
                <h2 className="info-tooltip__title">{text}</h2>
                <button className="info-tooltip__close" type="button" onClick={onClose} />
            </div>
        </section>
    );
};

export default InfoTooltip;
