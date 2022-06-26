const router = require('express').Router();

const categoryRoutes = require('./categories');
const productRoutes = require('./products');
const reveiwRoutes = require('./reviews');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reveiwRoutes);

module.exports = router;
