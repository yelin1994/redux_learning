const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const app = express();

const Component = React.createElement('div', null, 'hello world');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/api/data', function(req, res){
    res.json({
        data: '服务器'
    })
})

app.get('/', function(req, res) {
    const componentStr = ReactDOMServer.renderToString(Component);
    res.send(
        `<html>
            <body>${componentStr}</body>
        </html>
        `
    )
});
app.listen(8080);
