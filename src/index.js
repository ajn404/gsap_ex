import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter, Route, Switch, Routes} from "react-router-dom";
import routers from "./router/index";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'


ReactDOM.render (
            // routers.map(router => {
            //   <Routes>
            //     return (
            //         <Route path={
            //                 router.path
            //             }
            //             component={
            //                 router.component
            //         }></Route>
            //     )
            //     </Routes>
            // })
            <App></App>
        ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
