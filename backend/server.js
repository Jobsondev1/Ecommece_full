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
import orderRouter from './src/routes/oderRouter.js';


dotenv.config();

const app = express();

//connectToDatabase();
app.use(morgan('dev'))

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

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
