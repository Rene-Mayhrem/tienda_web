import React, { useState } from "react";
import "./CardArticle.css";

const CardArticle = ({ article }) => {
  const image_path =
    "/home/renecruz/Documents/university/classes/semestre-9/topicos_tecnologias_datos/tienda-project/tienda-front/src/img/";
  const [selectedItems, setSelectedItems] = useState(0);
  return (
    <div>
      <div className="card">
        <div className="img-article-container">
          <img
            src={image_path + "" + article.image}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h1>{article.name}</h1>
          {/* <p>
            {image_path}
            {article.image}
          </p> */}
          <h3>${article.price_sale}</h3>
          <div className="item-counter-container">
            <button className="btn-item-counter">-</button>
            <h4>{selectedItems}</h4>
            <button className="btn-item-counter">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
