require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const controller = require('./controller');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.use(bodyParser.json());
app.use( express.static(`${__dirname}/build`));

app.get('/api/houses', controller.getHouses);
app.post('/api/house', controller.addHouse);
app.delete('/api/house', controller.deleteHouse);


const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
    console.log(`Server evesdropping on port ${PORT}.`);
});