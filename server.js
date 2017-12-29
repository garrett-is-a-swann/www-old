const express = require('express'); // duh
const path = require('path'); // Loads pathing
const http = require('http'); // Loads HTTP
const bodyParser = require('body-parser'); // This is middleware to bind angular to our express server.

const config = require('./configs/api-conf.json');

const api = require('./server/routes/api');


const app = express();
app.set('config', config);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Select the paths we are using 
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.static(path.join(__dirname, 'server/static')));
app.use(express.static(path.join(__dirname, 'configs')));

// Set our api routes
app.use('/api', api);

// ADD MORE ROUTES HERE.. * COMES LAST

app.get('/foundation', (req, res) => {
    res.sendFile(path.join(__dirname, 'server/static/index.html'));
});

// Catch all other routes and return index file for now
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Store port in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on our port, on all netwrok interfaces
server.listen(port, ()=> console.log(`API running on localhost:${ port }`));

