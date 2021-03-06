import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import MessageBox from '../../components/messageBox/MessageBox';

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;   // selecionar item

    const dispatch = useDispatch();
  
    useEffect(() =>{
        if (productId) {
            dispatch(addToCart(productId, qty)); // mostrar item
     }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) =>{ // deleart item
        //deleatr o item
       dispatch(removeFromCart(id)); 
    };

    const checkoutHandler = ()=>{
        props.history.push('/signin?redirect=shipping');
    };
    
    return (
        <div className="row top">
        <div className="col-2">
          <h1>Carrinho de compras</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
             Carrinho esta vazio. <Link to="/">Realizar uma compras</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>R$:{item.price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
            </div>
        <div className="col-1">
            <div className=" card card-body">
                <ul>
                    <li>
                        <h2>
                            sub total ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : 
                            R$: { cartItems.reduce((a, c) =>a + c.price * c.qty,0)}
                        </h2>
                    </li>
                    <li>
                    <button
                        type="button"
                        onClick={checkoutHandler}
                        className="primary block"
                        disabled={cartItems.length ===0}
                      >
                        Fazer o check-out
                      </button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    );
}

export default CartScreen
