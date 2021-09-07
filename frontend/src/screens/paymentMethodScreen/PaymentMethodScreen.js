import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from '../../components/checkout/CheckoutSteps'

const PaymentMethodScreen = (props) => {
    const cart = useSelector((state)=> state.cart);
    const { shippingAddress } = cart;
    if (!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod (paymentMethod));
        props.history.push('/placeorder');
    };
    
    return (
        <div>
             <CheckoutSteps step1 step2 step3></CheckoutSteps>
             <form className="form" onSubmit={submitHandler}>
                 <div>
                     <h1>Forma de pagamento</h1>
                 </div>
                 <div>
                     <div>
                         <input 
                         type="radio"
                         id="paypal"
                         value="Paypal"
                         name="paymentMethod"
                         required
                         checked
                         onChange={(e) => setPaymentMethod(e.target.value)}>
                         </input>
                         <label htmlFor="paypal">Paypal</label>
                     </div>
                 </div>

                 <div>
                     <div>
                         <input 
                         type="radio"
                         id="stripe"
                         value="Stripe"
                         name="paymentMethod"
                         required
                         checked
                         onChange={(e) => setPaymentMethod(e.target.value)}>
                         </input>
                         <label htmlFor="stripe">Paypal</label>
                     </div>
                 </div>
                 <div>
                    <label />
                    <button className="primary" type="submit">
                        Continuar
                    </button>
            </div>       
             </form>
        </div>
    )
}

export default PaymentMethodScreen