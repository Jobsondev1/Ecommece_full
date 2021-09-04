/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
//import connectToDatabase from './database.js';
//import routes from './routes'.js;
import userRouter from './src/routes/userRouter.js';
import productRouter from './src/routes/productRouter.js';




const app = express();
dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


//connectToDatabase();
app.use(morgan('dev'))

app.use(express.json());
/*
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Produto nao emcontrado' });
    }
  });*/

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res)=>{
    res.send('sevidor rodando');
})
//app.use(routes);
const port = process.env.PORT || 5000;
app.use(cors());

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, ()=>{
    console.log(`Sevidor rodando na porta http://localhost:${port}`)
})
