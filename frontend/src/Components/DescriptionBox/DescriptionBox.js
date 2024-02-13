import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          sequi molestias fugit non, fuga expedita ipsam exercitationem, dicta
          adipisci quaerat, eaque quos optio fugiat? Hic tempora mollitia ut
          saepe enim!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          exercitationem voluptas ad assumenda! Fuga aut labore laboriosam harum
          cum sapiente natus atque! Similique consequuntur omnis eveniet est ex
          aspernatur magni?
        </p>
      </div>
    </div>
  );
};
