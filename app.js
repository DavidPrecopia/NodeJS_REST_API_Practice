// this specifies Express application
// the thing that will process requests - like the application file in Ktor.

// holds a ref to Express
const express = require('express')
// spins up an Express application
// this creates a unit of functionality (module) - exported below for use elsewhere
const app = express()

// this sets-up middleware.
// it accepts request, then processes them based upon our logic.
// Arguments: request, response, next (a function you can execute to move to the next middleware line)
app.use((req, res, next) => {
    // simple set status to 200 and return a simple JSON body.
    res.status(200).json({
        message: "It works!"
    })
})

// exports this module for use elsewhere.
module.exports = app