import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdownIcon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  // console.log(all_products);
  // console.log(props);
  const all_products_list = all_products.filter(
    (item) => item.category === props.category
  );
  // console.log(all_products_list);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdownIcon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products_list.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
