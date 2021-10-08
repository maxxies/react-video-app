import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Startpage from "./pages/startpage/Startpage";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import MainNavigation from "./layout/MainNavigation";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Route path="/" exact>
                    <Startpage />
                </Route>
                <Switch>
                    <Route path="/home">
                        <MainNavigation />
                        <Home />
                    </Route>
                    <Route path="/my-list">
                        <MainNavigation />
                        <MyList />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
