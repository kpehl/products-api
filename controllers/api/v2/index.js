const router = require('express').Router();

const categoryRoutes = require('./categories');
const productRoutes = require('./products');
const reveiwRoutes = require('./reviews');

router.use((req, res, next) => {
    if (req.method === 'GET') {
        res.set('Cache-Control', 'private, max-age=300');
    }
    next();
});

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reveiwRoutes);

module.exports = router;
