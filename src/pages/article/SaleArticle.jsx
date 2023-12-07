import React, { useEffect, useState } from "react";
import "./SaleArticle.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SaleArticle = () => {
  const url = "http://localhost:8080/";

  //! SALE DATA
  const location = useLocation();
  const sale = location.state.sale;
  console.log(location);

  // ! FORM DATA
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  // ! PAYMENT TYPE - API [GET]
  const [paymentTypes, setPaymentTypes] = useState([]);
  // ? load paymentType
  useEffect(() => {
    loadPaymentType();
  }, []);
  const loadPaymentType = async () => {
    const result = await axios.get(`${url}tipo-pago`);
    console.log(result.data);
    setPaymentTypes(result.data);
  };
  // ! Create dropdown filter - payment type
  const [paymentTypeFilter, setPaymentTYpeFilter] = useState("");
  const handlePaymentTypeChangeDropdown = (event) => {
    setPaymentTYpeFilter(event.target.value);
  };

  // ! COUNTER SECTION
  const [selectedItems, setSelectedItems] = useState(sale.quantity)
  const decrementItems = () => {
    if(selectedItems > 1) {
      setSelectedItems(selectedItems - 1);
    } else {
      alert('¡Error, no puedes tener menos de 1 articulo')
    }
  }
  const incrementItems = () => {
    if(selectedItems < sale.article.existence) {
      setSelectedItems(selectedItems + 1);
    } else {
      alert('¡Una disculpa, ya no hay suficientes articulos en el stock!')
    }
  }

  return (
    <div>
      <h1>Dato de venta</h1>
      <button>Regresar</button>
      <button>Comprar</button>
      <form>
        <h2>Datos del cliente</h2>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          className="client-form"
          placeholder="Nombre del cliente"
          name="client-name"
          id="client-name"
          onChange={(e) => {
            setClientName(e.target.value);
          }}
        />
        <label htmlFor="address">Direccion: </label>
        <input
          type="text"
          className="client-form"
          placeholder="Direccion del cliente"
          name="client-address"
          id="client-address"
          onChange={(e) => {
            setClientAddress(e.target.value);
          }}
        />
        <select
          name="payment-type-dropdown"
          id="dropdown"
          className="form-select"
          value={paymentTypeFilter}
          onChange={handlePaymentTypeChangeDropdown}
        >
          <option value="">Selecciona tipo de pago</option>
          {paymentTypes.map((paymentType, key) => (
            <option key={key} value={paymentType.id}>
              {paymentType.type}
            </option>
          ))}
        </select>
      </form>
      <h2>Datos de venta</h2>
      <h4>Número de articulos: {selectedItems}</h4>
      <h4>
        Total de compra:{" "}
        {Number(sale.article.price_sale * selectedItems).toFixed(2)}
      </h4>
      <table>
        <thead>
          <tr>
            <th>no.articulo</th>
            <th>producto</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{1}</td>
            <td>{sale.article.name}</td>
            <td>{sale.article.price_sale}</td>
            <td>{selectedItems}</td>
            <td>
              {Number(sale.article.price_sale * selectedItems).toFixed(2)}
            </td>
            <td><button onClick={decrementItems}>-</button></td>
            <td><button onClick={incrementItems}>+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SaleArticle;
