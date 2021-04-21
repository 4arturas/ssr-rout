import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom';

import App from '../src/app/App';
import Auth from '../src/auth/Auth';
import Home from '../src/Home';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('./build'));

//####################################################
//# GLOBAL FILTER
//####################################################
app.use((req,res,next) => {
    console.log( 'Filtering: ' + req.originalUrl );
    next();
});

//####################################################
//# UTILS
//####################################################
function common( req, res )
{
    const context = {};
    const originalUrl = req.originalUrl;
    let reactComponent;
    if ( originalUrl.indexOf('/auth') !== -1 )
    {
        reactComponent = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Auth/>
            </StaticRouter>
        );
    }
    else if ( originalUrl.indexOf('/app') !== -1 )
    {
        reactComponent = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
    }
    else
    {
        reactComponent = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Home/>
            </StaticRouter>
        );
    }
    const errMsg = 'Something went wrong';
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error(errMsg+':', err);
            return res.status(500).send(errMsg);
        }

        if (context.status === 404) {
            res.status(404);
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${reactComponent}</div>`)
        );
    });
}
//####################################################
//# ROUTES
//####################################################
app.get('/', (req, res) => {
    common( req, res );
});
app.get('/auth', (req, res) => {
    common( req, res );
});
app.get('/app', (req, res) => {
    common( req, res );
});



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});