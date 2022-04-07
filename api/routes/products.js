//referencing the Express framework
const express = require('express')
//referencing the Routes functionality.
//manage different routes with different HTTP verbs.
const routes = express.Router() 

//this is solely `/` since this file is exclusively used when on the '/products' path
routes.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET for /products'
    })
})

routes.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST for /products'
    })
})

routes.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    
    const testing = res.status(200)

    if (id === '3080') {
        testing.json({
            message: 'Baller',
            id: id
        })
    } else {
        testing.json({
            message: 'Broke'
        })
    }

})

routes.patch('/:productId', (req, res, next) => {
    //no need to use the `return` keyword - same rules as Kotlin
    res.status(200).json({
        message: 'Updated product'
    })
})

routes.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
})

//finally need to export it, so it can be used in other files
module.exports = routes