import '../../src/components/Page/Page.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import React from "react";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

import Register from "./Register/Register";
import Login from './Login/Login'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import Main from "./Main/Main";
import Preloader from "./Preloader/Preloader";
import PageNotFound from "./PageNotFound/PageNotFound";


/**
 * @return {boolean}
 */
function App() {

    let loggedIn = false;
    return (
        // <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__content">
                    <Switch>

                        <Route path="/signin">
                            <Login/>
                        </Route>

                        <Route path="/signup">
                            <Register/>
                        </Route>

                        <Route path="/profile">
                            <Header
                                authOn ={true}
                            />
                            <Profile onProfile/>
                        </Route>

                        <Route path="/movies">
                            <Header
                                authOn ={true}/>
                            <Movies/>
                            < Footer/>
                        </Route>

                        <Route path="/saved-movies">
                            <Header
                                authOn ={true}/>
                            <Movies/>
                            < Footer/>
                        </Route>

                        <Route path="/landing">
                            <Header
                                authOn ={false}/>
                            <Main/>
                            < Footer/>
                        </Route>

                        <Route path="/not-found">
                            <PageNotFound/>
                        </Route>

                        <Route exact path="*">
                            {loggedIn ? <Redirect to="/"/> : <Redirect to="/signin"/>}
                        </Route>

                    </Switch>
                    {/*< Footer/>*/}
                </div>
            </div>
        // </CurrentUserContext.Provider>
    );
}

export default App;
