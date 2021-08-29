import React, { useEffect } from 'react'
import Products from '../../components/products/Products';
import LoadingBox from '../../components/loadingBox/LoadingBox';
import MessageBox from '../../components/messageBox/MessageBox';
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../../actions/productActions';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const producList = useSelector((state) => state.producList);
    const {loading, error, products} = producList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
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
  