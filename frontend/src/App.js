import './App.css';
import Products from './components/products/Products';
import data from './data';
function App() {
  return (
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
       <div>
         <div className="row center">
           {data.products.map((product)=>(
             <Products key={product._id} product={product}></Products>
           ))}
         </div>
       </div>
     </main>
     <footer className="row center">Ecommece produção job</footer>
    </div>
  );
}

export default App;
