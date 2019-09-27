const express = require('express');

const router = express.Router()

router.post('/add-product', (req, res, next) => {
    const product = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        price: req.body.price,
        color: req.body.color,
        size: req.body.size,
    }
    res.send({ status: 'success', product });
})

module.exports = router;