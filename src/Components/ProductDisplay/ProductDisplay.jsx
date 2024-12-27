import React, { useContext } from "react";
import "./ProductDisplay.css";

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {
    image,
    name,
    new_price,
    old_price
} = product;

const  {addToCart} = useContext(ShopContext);
  return (
    <div className="Productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="producdisplay-right-prices">
          <div className="productdisplay-right-price-old">
          ₹{old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₹{new_price}
          </div>
        </div>
        <div className="product-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          ducimus animi, odio saepe velit accusamus doloribus totam quis
          perferendis fuga nemo et qui ad dicta laboriosam tenetur, recusandae
          itaque? Voluptas itaque quibusdam autem animi, numquam cum maxime
          fugit amet nam!
        </div>
        <div className="product-size-container">
            <h1>Select Size</h1>
            <div className="product-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <h1>Select color</h1>
            <div className="product-size">
                <div>blue</div>
                <div>black</div>
                <div>white</div>
                <div>orange</div>
                <div>beige</div>
            </div>
        </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="product-category"><span>Category: </span>Women, T-shirt, Crop Top </p>
            <p className="product-category"><span>Tags: </span>Modern, Latest </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
