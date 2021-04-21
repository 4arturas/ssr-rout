import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';
import App from './app/App';
import Auth from './auth/Auth';

ReactDOM.hydrate(
    <BrowserRouter>
        {
            window.location.href.indexOf('/auth') !== -1 ?
            <Auth /> :
            (window.location.href.indexOf('/app') !== -1 ? <App /> : <Home/>)
        }
    </BrowserRouter>,
    document.getElementById('root')
);