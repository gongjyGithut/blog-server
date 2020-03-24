#!/usr/bin/env node

/**
 * Module dependencies.
 */

// var app = require('./app');
// var debug = require('debug')('server:server');
// var http = require('http');
// require('./plugins/db')(app)
// require('./routes/article')(app)
//     /**
//      * Get port from environment and store in Express.
//      */

// var port = normalizePort(process.env.PORT || '8085');
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */

// var server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */

// server.listen(port, () => {
//     console.log(`port:${port}`)
// });
// server.on('error', onError);
// server.on('listening', onListening);

// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//     var port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }

// /**
//  * Event listener for HTTP server "error" event.
//  */

// function onError(error) {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }

//     var bind = typeof port === 'string' ?
//         'Pipe ' + port :
//         'Port ' + port;

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case 'EACCES':
//             console.error(bind + ' requires elevated privileges');
//             process.exit(1);
//             break;
//         case 'EADDRINUSE':
//             console.error(bind + ' is already in use');
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */


const express = require('express');
const app = express()


app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/article')(app)

app.listen(8085, () => {
    console.log('http://localhost:8085')
})
app.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}