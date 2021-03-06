import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';
import CartScreen from './screens/cartScreen/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/signinScreen/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/registerScrenn/RegisterScrenn';
import ShippingAddressScreen from './screens/shippingAddressScreen/ShippingAddressScreen';
import PaymentMethodScreen from './screens/paymentMethodScreen/PaymentMethodScreen';
import PlaceOrderScreen from './screens/placeOrderScreen/PlaceOrderScreen';
import OrderScreen from './screens/orderScreen/OrderScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;    // adicionar intem ao carrinho
 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
    <div className="grid-container">
     <header className="row">
       <div>
          <Link className="brand" to="/">
              ECOMMECE
          </Link>
       </div>
       <div>
            <Link to="cart">Carrinho
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '} 
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>
                    Sair
                    </Link>
                  </ul>
              </div>
              ) : (
                 <Link to="signin">Entrar</Link>
              )}
          </div>
     </header>

     <main>
     <Route path="/cart/:id?" component={CartScreen}></Route>
       <Route path="/product/:id" component={ProductScreen}></Route>
       <Route path="/signin" component={SigninScreen}></Route>
       <Route path="/register" component={RegisterScreen}></Route>
       <Route path="/shipping" component={ShippingAddressScreen}></Route>
       <Route path="/payment" component={PaymentMethodScreen}></Route>
       <Route path="/placeorder" component={PlaceOrderScreen}></Route>
       <Route path="/order/:id" component={OrderScreen}></Route>
       <Route path="/" component={HomeScreen} exact></Route>    
     </main>

     <footer className="row center">Ecommece produ????o job</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
