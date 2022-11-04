// import React from "react";
// import './InfoTooltip.css';
//
// const InfoTooltip = ({ text, isOpen, onClose }) => {
//     return (
//         <section className={`info-tooltip ${isOpen ? 'info-tooltip_opened' : ''}`}>
//             <div className="info-tooltip__content">
//                 <h2 className="info-tooltip__title">{text}</h2>
//                 <button className="info-tooltip__close" type="button" onClick={onClose} />
//             </div>
//         </section>
//     );
// };
//
// export default InfoTooltip;


import React from "react";
import './InfoTooltip.css';

function InfoTooltip({ text, image, isOpen, onClose }) {
    return (
        <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__info">
                <button className="popup__btn-close" type="button" aria-label="Выйти из попапа"
                        onClick={onClose}/>
                <img className="popup__status" src={image} alt={text}/>
                <h2 className="popup__message">{text}</h2>
            </div>
        </div>
    );
}

export default InfoTooltip;
