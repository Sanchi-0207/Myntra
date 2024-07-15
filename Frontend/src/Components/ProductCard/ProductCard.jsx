import React from 'react'
import { Link } from 'react-router-dom';
import "./Info.css"
import { Products } from '../../Utilities/ProductData';

const ProductCard = ({Product}) => {

  return (
    <>
      <Link to={`/productinfo/${Product.product_title}`}>
        <div className="product-card">
          <img src={Product.imgUrl} alt="Athena Bell Sleeve Top" />
          <div className="product-info">
            <h3>{Product.brand_name}</h3>
            <p>{Product.product_title}</p>
            <p className="price">
              {Product.current_price}{" "}
              <span className="original-price">{Product.original_price}</span>{" "}
              <span className="discount">{Product.discount} OFF</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard