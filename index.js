require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes/index'); // import the routes
const { sequelize } = require('./models'); // import models

var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 8000

app.use(cors({origin: '*'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use('/api/', routes);

app.listen({ port: port }, async () => {
    await sequelize.authenticate();
    console.log('Server running at port 8000')
});