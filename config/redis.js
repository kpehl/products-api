require('dotenv').config();

// const { promisify } = require('util');
const redis = require('redis');

const client = redis.createClient({
    legacyMode: true
});

client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));

// module.exports = {
//     connect: promisify(client.connect).bind(client),
//     get: promisify(client.get).bind(client),
//     set: promisify(client.set).bind(client),
//     quit: promisify(client.quit).bind(client)
//   };

module.exports = { client };