import expess from 'express';
import expressAsyncHandler  from 'express-async-handler';
import { isAuth } from '../../utils.js';
import Order from '../model/orderModel.js';

const orderRouter = expess.Router();

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Carrinho esta vazio' });
      } else {
        const order = new Order({
          orderItems: req.body.orderItems,
          shippingAddress: req.body.shippingAddress,
          paymentMethod: req.body.paymentMethod,
          itemsPrice: req.body.itemsPrice,
          shippingPrice: req.body.shippingPrice,
          taxPrice: req.body.taxPrice,
          totalPrice: req.body.totalPrice,
          user: req.user._id,
        });
        const createdOrder = await order.save();
        res
          .status(201)
          .send({ message: 'Novo pedido criado', order: createdOrder });
      }
    })
  );

  orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Order Not Found' });
      }
    })
  );
  
  orderRouter.put('/:id/pay', 
  isAuth, 
  expressAsyncHandler(async (req, res) =>{
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paiDat = Date.now();
      order.paymentResult ={
        id:req.body.id,
        status: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({message: 'pedido pago', order:updatedOrder });
    }else{
      res.status(404).send({message:'pedido não encontrado'});
    }
  }) 
  );
  
export default orderRouter