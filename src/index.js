import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App.js"
import Iphone7 from "./components/Iphone7.js";
import Iphone11 from "./components/Iphone11.js";
import Iphone12 from "./components/Iphone12.js";
import IphoneXR from "./components/IphoneXR.js";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/phone0" component={Iphone7} />
            <Route path="/phone1" component={Iphone11} />
            <Route path="/phone2" component={Iphone12} />
            <Route path="/phone3" component={IphoneXR} />

        </Switch>
    </BrowserRouter>,
    rootElement
);