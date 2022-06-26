require('dotenv').config();

const { promisify } = require('util');
const redis = require('redis');

const client = redis.createClient({
    url: process.env.REDURL,
    legacyMode: true,
    port: process.env.REDPORT,
});

module.exports = {
    connect: promisify(client.connect).bind(client),
    get: promisify(client.get).bind(client),
    set: promisify(client.set).bind(client)
  };