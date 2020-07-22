import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HolaMundo from "./components/HolaMundo";
//import AdiosMundo from "./components/AdiosMundo";

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        HolaMundo / >
        <
        /header>{" "} <
        /div>
    );
}

export default App;