import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/index.jsx";
import Search from "./Pages/Search/index.jsx";



export default class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search" component={Search} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
};

