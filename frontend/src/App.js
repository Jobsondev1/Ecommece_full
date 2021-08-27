import './App.css';
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
             <div key={`/product/${product._id}`}className="card">
              <a href={`/product/${product._id}`}>
               <img className="medium" 
               src={product.image}
               alt={product.name}
               />
              </a>
              <div className="card-body">
                <a>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div className="price"> R$:{product.price}</div>
              </div>
           </div>
           ))}
         </div>
       </div>
     </main>
     <footer className="row center">Ecommece produção job</footer>
    </div>
  );
}

export default App;
