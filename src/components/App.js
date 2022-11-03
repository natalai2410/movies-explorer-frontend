import '../../src/components/Page/Page.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import React, {useCallback, useEffect, useState} from "react";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

import Register from "./Register/Register";
import Login from './Login/Login'

// import Switch from "react-router-dom/es/Switch";
// import Route from "react-router-dom/es/Route";
import { Route, Switch } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import Preloader from "./Preloader/Preloader";
import PageNotFound from "./PageNotFound/PageNotFound";
import { useLocation} from "react-router-dom";
import Main from "./Main/Main";


import MainApi, {getContent} from "../utils/MainApi";

import { useHistory } from "react-router-dom";
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import mainApi from "../utils/MainApi";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import SavedMovies from "./SavedMovies/SavedMovies";


/**
 * @return {boolean}
 */
function App() {

    const Route = require("react-router-dom").Route;
    const Switch = require("react-router-dom").Switch;


    const [showItems, setShowItems] = useState(false);
    const handleToggleMenu = () => setShowItems(!showItems);
    const {pathname} = useLocation();

    const [loggedIn, setLoggedIn] = React.useState(false);
    const history = useHistory();
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [popupTitle, setPopupTitle] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const jwt = localStorage.getItem('jwt');


    React.useEffect(() => {
        const tokenCheck = (jwt) => {
            mainApi.getContent(jwt)
                .then((res) => {
                    if (res) {
                        setCurrentUser(res);
                        setLoggedIn(true);
                        history.push('/movies')

                    }
                })
                .catch((err) => {
                    setIsOpenPopup(true);
                    setPopupTitle('error tokenCheck ' + err);
                });
        };

        if (jwt) {
            tokenCheck(jwt);
        }
    }, [jwt]);


    function onRegister( name, email, password) {
        MainApi.register(name, email, password)
            .then((res) => {
                if (res._id) {
                }
            })
            .catch((err) => {
                setIsOpenPopup(true);
                setPopupTitle('Ошибка регистрации!');
            });
    }

    function onLogin  (email, password) {
        MainApi.authorize( email, password )
            .then((res) => {
                localStorage.setItem("jwt", res.token);
                console.log(res.token);
                setLoggedIn(true);
                history.push('/movies')
            })
            .catch((err) => {
            setIsOpenPopup(true);
            setPopupTitle('Ошибка авторизации!');
        });
    };


    const onLoggedOut = () => {
        setLoggedIn(false);
        localStorage.removeItem("jwt");
    };

    function openPopup(textError) {
        setPopupTitle(textError);
        setIsOpenPopup(true);
    }

    function closePopup() {
        setIsOpenPopup(false);
        setPopupTitle('');
    }


    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className={`page ${showItems ? 'page_background-black' : ''}`}>
            <div className="page__content">
                {pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' || pathname === '/landing' ?
                    <Header
                        authOn={ loggedIn } // pathname === '/landing' ? false : true
                        showItems={showItems}
                        handleToggleMenu={handleToggleMenu}
                    /> : ''}

                <main>
                    <Switch>
                        <Route path="/signin">
                            <Login onLogin={onLogin}/>
                        </Route>

                        <Route path="/signup">
                            <Register onRegister={onRegister}/>
                        </Route>


                        <ProtectedRoute
                            path="/profile"
                            loggedIn={loggedIn}
                            onLoggedOut = {onLoggedOut}
                            component={Profile}
                        />

                        <ProtectedRoute
                            path="/movies"
                            loggedIn={loggedIn}
                            component={Movies}
                        />

                        <ProtectedRoute
                            path="/saved-movies"
                            loggedIn={loggedIn}
                            component={SavedMovies}
                        />


                        <Route path="/landing"><Main/></Route>

                        <Route path="*"> <PageNotFound />
                        </Route>

                    </Switch>
                </main>

                {pathname === '/movies' || pathname === '/saved-movies' || pathname === '/landing' ?
                    < Footer/> : ''}


                <InfoTooltip text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
            </div>
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
