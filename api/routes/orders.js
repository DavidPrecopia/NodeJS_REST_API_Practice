const express = require('express')
const routes = express.Router() 

// extra note, I have yet to use this `next` function since I 
// haven't needed to forward the request yet.
routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Retrieved all orders'
    })
})

routes.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created'
    })
})

routes.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        id: req.params.orderId,
        message: 'Order details'
    })
})

routes.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted'
    })
})

module.exports = routes