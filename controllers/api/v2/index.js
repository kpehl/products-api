const router = require('express').Router();

const redis = require('redis');
const client = redis.createClient();

const categoryRoutes = require('./categories');
const productRoutes = require('./products');
const reveiwRoutes = require('./reviews');

router.use(async (req, res, next) => {
    if (req.method === 'GET') {
        // client-side caching
        res.set('Cache-Control', 'private, max-age=300');

        // server-side caching
        await client.connect();
        const cache = await client.get(req.originalUrl);
        if (cache) {
            res.status(200).json(JSON.parse(cache));
            return;
        }
    }
    next();
});

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reveiwRoutes);

module.exports = router;
