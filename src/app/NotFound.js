import React from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    return <h1>Non existing page!</h1>;
};