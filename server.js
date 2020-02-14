const express = require('express');

const actionRouter = require('./data/helpers/actionRouter');
const projectRouter = require('./data/helpers/projectRouter');

const server = express();

server.use(express.json());

server.use('/api/actions', logger, actionRouter)
server.use('/api/projects', logger, projectRouter)

server.get('/', logger, (req, res) => {
    res.send('<h2>Welcome to the API</h2>')
})

function logger(req, res, next) {
    console.log(`${req.method} request made to ${req.orginalUrl}`)
    next();
}

module.exports = server;