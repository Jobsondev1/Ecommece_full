import expess from 'express';
import expressAsyncHandler  from 'express-async-handler';
import { isAuth } from '../../utils.js';
import Order from '../model/orderModel.js';

const orderRouter = expess.Router();

orderRouter.post('/',
isAuth,
expressAsyncHandler(async (req,res)=>{
    if (req.body.orderItems.length === 0){
        res.status(400).send({ message: 'Carrinho está vazio'});
    }else{
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shipingPrice: req.body.shipingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
            });
            const createOrder = await order.save();
            res.status(201)
            .send({ message: 'Nova order criada', order: createOrder});
        }   
    })
);

export default orderRouter