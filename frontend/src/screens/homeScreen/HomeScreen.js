import React from 'react'
import Products from '../../components/products/Products';
import data from '../../data';

const HomeScreen = () => {
    return (
        <div>
            <div className="row center">
                {data.products.map((product) => (
                    <Products key={product._id} product={product}></Products>
                ))}
            </div>
        </div>
    )
}

export default HomeScreen
