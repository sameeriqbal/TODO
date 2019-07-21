/*API declaration is separated from the network 
related configuration (port, protocol, etc).*/
const app = require('./app')
/* Get port from environment and store in Express.*/
const PORT = process.env.PORT || '5000';
/* Create HTTP server.*/
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});