require('dotenv').config();

const redis = require('redis');

let client;

(async function () {
    client = redis.createClient();
    await client.connect();
  })();

client.on('connect', () => {
    console.log('Connected to Redis Server');
});

client.on('error', (err) => {
    console.log('Redis Client Error', err)
});

module.exports = client;