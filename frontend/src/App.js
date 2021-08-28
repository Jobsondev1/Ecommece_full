import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/homeScreen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
     <header className="row">
       <div>
          <a className="brand" href="/">
              ECOMMECE
          </a>
       </div>
       <div>
            <a href="cart">Carrinho</a>
            <a href="signin">Entrar</a>
          </div>
     </header>

     <main>
       <Route path="/product/:id" component={ProductScreen}></Route>
       <Route path="/" component={HomeScreen} exact></Route>    
     </main>

     <footer className="row center">Ecommece produção job</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
