import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";



const Routes = () => {
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
};

export default Routes;