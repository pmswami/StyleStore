import React from "react";
import "./NewCollections.css";
// import newCollections from "../Assets/new_collections";
import { Item } from "../Item/Item";
import { useEffect } from "react";
import { useState } from "react";

export const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);
  useEffect(() => {
    let newcollections = fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNewCollections(data));
  }, []);
  return (
    <div className="new-collections">
      {newCollections.length > 0 ? <h1>New Collections</h1> : <></>}
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => {
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
    </div>
  );
};
