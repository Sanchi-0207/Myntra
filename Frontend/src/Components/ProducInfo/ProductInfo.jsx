import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "../../Utilities/ProductData";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img1.jpeg";
import "./Info.css"
import { MyContext } from "../../Utilities/Context/ContextProvider";
import { FaRegHeart } from "react-icons/fa";

const ProductInfo = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const product = Products.find((product) => product.product_title === id);
   const { outfit, setOutfit } = useContext(MyContext);

   const handleNavigate = () => {
     setOutfit((prevImageSrc) => [...prevImageSrc, product.imgUrl]);
     navigate("/outfitmaker");
   };
  
  console.log(outfit)
  return (
    <>
      {product && (
        <div className="container">
          <div className="product-page">
            <div className="product-images">
              <img
                src={product.imgUrl}
                alt="Product Image"
              />
            </div>
            <div className="product-details">
              <h1>{product.brand_name}</h1>
              <p>{product.product_title}</p>
              <div className="rating">
                <span>{product.ratings}</span>
                <span>★</span> <span>99 Ratings</span>
              </div>
              <div className="price">
                <span className="current-price">{product.current_price}</span>
                <span className="original-price">{product.original_price}</span>
                <span className="discount">({product.discount})</span>
              </div>
              <p>inclusive of all taxes</p>
              <div className="buttons">
                <button className="text-base p-2 bg-[#FF3E6C] text-white">
                  ADD TO BAG
                </button>
                <button className="text-base p-2 bg-slate-300 text-white border-1 bo">
                  WISHLIST
                </button>

                <button onClick={handleNavigate} className="text-base p-2 bg-[#4caf50] text-white">
                  CREATE OUTFIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
