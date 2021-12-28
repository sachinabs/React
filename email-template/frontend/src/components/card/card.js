import React, { useState, useEffect } from "react";
import "./card.css";
import useAPI from "../../frontend/src/Hooks/useAPI";

function Card() {
  const [loading, product, error] = useAPI({ url: "http://localhost:7000/show/welcome" });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  if (product) {
    return product.map((productin, i) => (
      <div id="box" key={i}>
        <div>
          <img id="image" src={productin.image} alt="" />
        </div>

        <h5>{productin.categorie}</h5>
        <h5> &#8377; {productin.price}</h5>
      </div>
    ));
  } else {
    return <h1>no data</h1>;
  }
}

export default Card;
