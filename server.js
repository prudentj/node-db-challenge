const express = require('express');
const helmet = require('helmet');

const projRouter = require('./projectManager/projectManager-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projectManager', projRouter);

module.exports = server;
