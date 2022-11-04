import React, {useContext, useState} from "react";
import './Profile.css'
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import isEmail from "validator/es/lib/isEmail";

function Profile({ onLoggedOut , openPopup }) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [lastName, setLastName] = useState(currentUser.name);

    const [email, setEmail] = useState(currentUser.email);
    const [lastEmail, setLastEmail] = useState(currentUser.email);

    const [isActiveButton, setActiveButton] = useState(false);

    function handleNameChange(e) {
        const value = e.target.value;
        setName(value);

        if (value !== lastName) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);

        if (value !== lastEmail) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    }


    function handleSubmit(e) {
        e.preventDefault();

        mainApi.sendUserInfo({ name, email })
            .then(() => {
            setLastName(name);
            setLastEmail(email);
            openPopup('Данные успешно изменены!', true);
        })
            .catch((err) => {
                openPopup(`Упс...Что-то пошло не так! ${err}`, false);
            });
    }

    return (
        <section className="profile">
            <form className="profile__form"
                  onSubmit={handleSubmit}>
                <h3 className="profile__title">Привет, {name}!</h3>
                <div className="profile__inputs">
                    <p className="profile__text">Имя</p>
                    <div className="profile__area profile__area_name">
                        <input className="profile__settings"
                               type="name"
                               name="name"
                               placeholder="Введите имя"
                               //value={inputValues.name || ''}
                               onChange={handleNameChange}/>
                    </div>
                    <div className="profile__area profile__area_email">
                        <input className="profile__settings"
                               type="email"
                               name="email"
                               placeholder="pochta@yandex.ru"
                               //value={inputValues.email || ''}
                               onChange={handleEmailChange}/>
                    </div>
                    <p className="profile__text">E-mail</p>
                </div>

                <label className="form__item">
                    {/*<p className={`form__error ${errors.email ? 'form__error-display' : ''}`}>{errors.email}</p>*/}
                </label>

                <button className="profile__button" disabled={!isActiveButton}>Редактировать</button>
                <button className="profile__link"
                        type="button"
                        onClick={onLoggedOut}>Выйти из аккаунта
                </button>
            </form>
        </section>
    );
}

export default Profile;
