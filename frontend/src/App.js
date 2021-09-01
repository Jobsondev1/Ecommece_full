import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';
import CartScreen from './screens/cartScreen/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;    // adicionar intem ao carrinho

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
            <Link to="signin">Entrar</Link>
          </div>
     </header>

     <main>
     <Route path="/cart/:id?" component={CartScreen}></Route>
       <Route path="/product/:id" component={ProductScreen}></Route>
       <Route path="/" component={HomeScreen} exact></Route>    
     </main>

     <footer className="row center">Ecommece produção job</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
