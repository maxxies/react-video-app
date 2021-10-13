import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxStore from "./redux/ReduxStore";
import "./App.css";

import Startpage from "./pages/startpage/Startpage";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import MainNavigation from "./layout/MainNavigation";
import PlayVideo from "./pages/PlayVideo";
import Category from "./pages/Category";
import Help from "./pages/Help";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

function App() {
    return (
        <div>
            <Provider store={ReduxStore}>
                <Switch>
                    <Route path="/" exact>
                        <Startpage />
                    </Route>
                    <Route path="/play-video">
                        <MainNavigation />
                        <PlayVideo />
                    </Route>
                    <Route path="/category">
                        <MainNavigation />
                        <Category />
                    </Route>
                    <Route path="/home">
                        <MainNavigation />
                        <Home />
                    </Route>
                    <Route path="/my-list">
                        <MainNavigation />
                        <MyList />
                    </Route>
                    <Route path="/help">
                        <MainNavigation />
                        <Help />
                    </Route>
                    <Route path="/search">
                        <MainNavigation />
                        <Search />
                    </Route>
                    <Route path="/setting">
                        <MainNavigation />
                        <Settings />
                    </Route>
                </Switch>
            </Provider>
        </div>
    );
}

export default App;
