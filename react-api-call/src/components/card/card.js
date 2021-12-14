import React, { useState, useEffect } from "react";
// import { BrowserRouter as Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

function Card() {
  const url = "http://localhost:4600/rand-joke";
  const [product, setProduuct] = useState(null);
  const [showpunch, setshowpunch] = useState(false);
  useEffect(() => {
    axios.get(url).then((response) => {
      setProduuct(response.data);
    });
  }, [url]);

  if (product) {
    console.log(product);

    return (
      <div className="container">
        <div id="box">
          <p>{product.type}</p>
          <h3>{product.setup}</h3>
          {showpunch ? <h1 id="punchline">{product.punchline}</h1> : ""}
          <button onClick={()=>setshowpunch(!showpunch)}>see punchline</button>
          <h5>{product.id}</h5>
        </div>
      </div>
    );
  } else {
    return <h1>no data</h1>;
  }
}

export default Card;

//   <li key={productin.id}>{productin.name}</li>
