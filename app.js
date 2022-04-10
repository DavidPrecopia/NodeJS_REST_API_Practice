// this specifies Express application
// the thing that will process requests - like the application file in Ktor.

// holds a ref to Express
const express = require('express')
// spins up an Express application
// this creates a unit of functionality (module) - exported below for use elsewhere
const app = express()

//import the Morgan package
const morgan = require('morgan')

// this sets-up the basic middleware.
// it accepts request, then processes them based upon our logic.
// Arguments: request, response, next (a function you can execute to move to the next middleware line)
// app.use((req, res, next) => {
//     // simple set status to 200 and return a simple JSON body.
//     res.status(200).json({
//         message: `${PRODUCTS_PATH} some message`
//     })
// })

const productsRoute = require('./api/routes/products')
const ordersRoute = require('./api/routes/orders')

//MORGAN
//This is setting up Morgan as a middleware. Ensuring all requests are first funneled through it first.
//Internally, it will use the `next` function to forward said request to our defined routes - passes it along.
//Unlike the routes below this, we are not specifying the path since we want it to intercept all incoming requests.
//`dev` refers to a pre-defined format for the log messages.
app.use(morgan('dev'))

//the second arg specifies which file will handle all requests to this path.
app.use('/products', productsRoute)
app.use('/orders', ordersRoute)


//ERROR HANDLING
//No filer, thus handles the requests that are not captured by the above specified routes.
//This function creates an error and forwards it (via the Next function) to the following function.
app.use((req, res, next) => {
    const error = new Error('Route not supported.')
    error.status = 404
    //this forwards the error to the "Next" function.
    next(error)
})

//Handles requests that have an Error. 
//Would be thrown from the routes themselves.
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    })
})


// exports this module for use elsewhere.
module.exports = app