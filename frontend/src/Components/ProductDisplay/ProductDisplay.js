import React, { useContext } from "react";
import "./ProductDisplay.css";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="The Product Image" />
          <img src={product.image} alt="The Product Image" />
          <img src={product.image} alt="The Product Image" />
          <img src={product.image} alt="The Product Image" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="The Product Image"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>{122}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            saepe ipsum, nostrum animi atque cupiditate commodi quos non vel.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>Small</div>
              <div>Medium</div>
              <div>Large</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <p className="productdisplay-right-category">
            <span>Category : </span>Women, T-shirt, Crop Top
          </p>
          <p className="productdisplay-right-category">
            <span>Tags : </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};
