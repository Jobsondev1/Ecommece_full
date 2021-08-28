//require("dotenv").config();

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import data from './src/data.js';
//const connectToDatabase = require("./database");
//const routes = require("./routes");

//connectToDatabase();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

app.get('/api/products', (req, res)=>{
    res.send(data.products);
})

app.get('/', (req, res)=>{
    res.send('sevidor rodando');
})
//app.use(routes);

app.listen(port, ()=>{
    console.log(`Sevidor rodando na porta http://localhost:${port}`)
})
