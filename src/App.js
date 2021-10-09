import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Startpage from "./pages/startpage/Startpage";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import MainNavigation from "./layout/MainNavigation";
import PlayVideo from "./pages/PlayVideo";
import Category from "./pages/Category";
import Help from "./pages/Help";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            dataTasks: [],
        };
    }
    componentDidMount() {
        fetch("./videoDataSet.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    dataTasks: data,
                });
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key],
                    };
                    meetups.push(meetup);
                }
                for (let i = 0; i < meetups.length; i++) {
                    const meet = {
                        ...meetups[i],
                    };

                    for (const j in meet) {
                        if (typeof meet[j] === "object") {
                            const me = {
                                ...meet[j],
                            };
                            console.log(me);
                        }
                    }

                    break;
                }
            });
    }

    render() {
        return (
            <div>
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
                </Switch>
            </div>
        );
    }
}

export default App;
