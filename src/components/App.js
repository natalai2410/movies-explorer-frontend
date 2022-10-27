import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from "react";

import ProtectedRoute from "./ProtectedRoute";

import Register from "./Register";
import Login from './Login'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";


import Redirect from "react-router-dom/es/Redirect";
import Profile from "./Profile";
import Movies from "./Movies";
import Landing from "./Landing";


/**
 * @return {boolean}
 */
function App() {


    let onLogin;
    let onRegister;
    let loggedIn;
    let onProfile;
    let authOn = true;
    return (
        // <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">
                    <Switch>
                        <Route path="/signin">
                            <Login onLogin={onLogin}/>
                        </Route>

                        <Route path="/signup">
                            <Register onRegister={onRegister}/>
                        </Route>

                        <Route path="/profile">
                            <Header
                                authOn ={true}
                            />
                            <Profile onProfile={onProfile}/>
                        </Route>

                        <Route path="/movies">
                            <Header
                                authOn ={true}/>
                            <Movies onProfile={onProfile}/>
                        </Route>

                        <Route path="/landing">
                            <Header
                                authOn ={false}/>
                            <Landing/>
                        </Route>

                        {/*<Route path="/">*/}
                        {/*    <Header title="Выйти" mail={email} onClick={onLoggedOut} route=""/>*/}
                        {/*    <ProtectedRoute exact path="/"*/}
                        {/*                    component={Main}*/}
                        {/*                    LoggedIn={loggedIn}*/}
                        {/*    />*/}
                        {/*</Route>*/}

                        <Route exact path="*">
                            {loggedIn ? <Redirect to="/"/> : <Redirect to="/signin"/>}
                        </Route>

                    </Switch>

                    {loggedIn && < Footer/>}

                </div>
            </div>
        // </CurrentUserContext.Provider>
    );
}

export default App;
