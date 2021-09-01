/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './products.css'
import Rating from '../rating/Rating'
import { Link } from 'react-router-dom'

const Products = (props) => {
    const { product } =props
    return (
        <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">R$: {product.price}</div>
        </div>
      </div>
    )
}

export default Products
