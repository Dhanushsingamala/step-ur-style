import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const [promoCode, setPromoCode] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(0);

  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const cartTotal = getTotalCartAmount();

  const validatePromoCode = () => {
    if (promoCode.trim().toLowerCase() === "christmas") {
      if (cartTotal >= 4999) {
        setDiscount(1000);
        setMessage("Promo code applied successfully! ₹1000 off.");
      } else {
        setMessage(
          "Minimum cart value of ₹4999 is required for this promo code."
        );
      }
    } else if (promoCode.trim().toLowerCase() === "newme") {
      if (cartTotal >= 1000) {
        setDiscount(500);
        setMessage("Promo code applied successfully! ₹500 off.");
      } else {
        setMessage(
          "Minimum cart value of ₹1000 is required for this promo code."
        );
      }
    } else {
      setMessage("Invalid promo code. Please try again.");
      setDiscount(0);
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
        <p>Quantity</p>
        <p>Add</p>
        <p>Total</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-main">
                <img
                  className="carticon-product-icon"
                  src={item.image}
                  alt=""
                />
                <p>{item.name}</p>
                <p>₹{item.new_price}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                />
                <button className="cartitems-quantity">
                  {cartItems[item.id]}
                </button>
                <button
                  className="cartitems-addmore"
                  onClick={() => {
                    addToCart(item.id);
                  }}
                >
                  +
                </button>
                <p>₹{item.new_price * cartItems[item.id]}</p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>₹{cartTotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item">
              <p>Promocode Waiver</p>
              <p>{discount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{cartTotal - discount}</h3>
            </div>
          </div>
          <button> Go To CheckOut</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={validatePromoCode}>Validate</button>
            {message && (
              <p
                style={{
                  marginTop: "10px",
                  color: message.includes("successfully") ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
