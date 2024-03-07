const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const monggoDb = require('./db/db');
const routes = require('./routes/routes')
const corsOption = {
    origin: 'http:localhost:3000/',
    methods: ['GET', "POST", 'PUT', 'PATCH', 'DELETE'],
}

monggoDb.connectToMongo()
app.use(cors(corsOption));

app.use(bodyparser.json());

app.use('/api', routes.router)

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`connect to port ${PORT}`)
})
