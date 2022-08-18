import React from "react";
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initalState } from "./context/inititalState";
import reducer from "./context/reducer";

const container=document.getElementById("root");
const root=createRoot(container);
root.render(<Router>
    <StateProvider initialState={initalState} reducer={reducer}>
        <App />
    </StateProvider>
</Router>)