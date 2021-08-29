import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../../components/products/Products';
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MenssageBox from '../../components/messageBox/MessageBox';


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      const fecthData = async () => {
        try {
          setLoading(true);
          const { data } = await axios.get('/api/products');
          setLoading(false);
          setProducts(data);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fecthData();
    }, []);
    return (
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MenssageBox variant="danger">{error}</MenssageBox>
        ) : (
          <div className="row center">
            {products.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        )}
      </div>
    );
}

export default HomeScreen
  