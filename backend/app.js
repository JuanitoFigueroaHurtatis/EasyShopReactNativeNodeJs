const express = require('express');

const app = express();

require('dotenv/config');
const api = process.env.API_URL;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('tiny'));

const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect(process.env.CONNECTION_STRING, {useCreateIndex:true, useNewUrlParser: true})
.then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
.catch(err => console.log(err));

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'Hair Dresser',
        image: 'some_url'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    res.send(newProduct);
});

app.listen(3000, () => {
    console.log("Server Is Running Http://localhost:3000");
});

