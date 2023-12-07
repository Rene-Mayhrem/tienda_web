import React, { useState } from "react";
import "./CardArticle.css";
import { Link, useNavigate } from "react-router-dom";
import SaleArticle from "../../../pages/article/SaleArticle";

const CardArticle = ({ article }) => {
  // ! navigation
  const navigate = useNavigate();

  const image_path =
    "/home/renecruz/Documents/university/classes/semestre-9/topicos_tecnologias_datos/tienda-project/tienda-front/src/img/";
  
    // ! Counter section
      const [selectedItems, setSelectedItems] = useState(0);
  const [amount, setAmount] = useState(0);
  const decrement = () => {
    if(selectedItems > 0) {
      setSelectedItems(selectedItems - 1);
    }
  }
  const increment = () => {
    if(selectedItems < article.existence) {
      setSelectedItems(selectedItems + 1);
    }
  }

  //! handle sale event
  const handleSale = () => {
    const data = [
      {
        id_employee: 1,
        id_client: 0,
        sheet: '',
        amount: 0,
        fecha: '',
        id_payment_type: 0,
        id_direccion_cliente: 0
      }
    ]
    navigate("venta-articulo", {state: {saleDetails: data}} )
  }


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
          <h3>${article.price_sale}</h3>
          <div className="item-counter-container">
            <button className="btn-item-counter" onClick={decrement}>-</button>
            <h4>{selectedItems}</h4>
            <button className="btn-item-counter" onClick={increment}>+</button>
          </div>
          <button onClick={handleSale}>Comprar</button>
          <button>Agregar al carrito</  button>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
