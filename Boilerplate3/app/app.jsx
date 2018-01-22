import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";


//Load foundation
$(document).foundation();

//app.css
require("style!css!sass!ApplicationStyle");

ReactDOM.render(
    <p>Boilerplate 3</p>,
    document.getElementById("app")
);
