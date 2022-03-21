// this file is used to create the NodeJS server.

// allow us to use HTTP protocols.
const http = require("http")
const app = require('./app')

// specify the port to run on.
// `process.env` access environmental variables - set by the server you're running on.
// if the env port is not set, use the declare port.
const port = process.env.PORT || 8080

// `createServer()` accepts a listener - called with every new server, and returns a response.
// this call the app module/file - our middleware for processing the requests
const server = http.createServer(app)

// tell the server to start listening on the given port.
// the server will start to listen on the given port, then execute 
// the function passed to `createServer()`
server.listen(port)