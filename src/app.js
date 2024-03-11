const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();

const bookRoutes = require('./routes/book.route');
const bodyParser = require('body-parser');

//Usamos expresss para el middleware
const app = express();
//Parseamos el body de las peticiones
app.use(bodyParser.json());

//Conectamos a la base de datos
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection;

app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
});