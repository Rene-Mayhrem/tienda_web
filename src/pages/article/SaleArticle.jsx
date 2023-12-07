import React, { useEffect, useState } from 'react'
import { useLocation  } from 'react-router-dom'
import axios from 'axios'

const SaleArticle = () => {
    const url = 'http://localhost:8080/'

    const location = useLocation();
    console.log(location);


    // ! FORM DATA
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');

    // ! PAYMENT TYPE - API [GET]
    const [paymentTypes, setPaymentTypes] = useState([]);
    // ? load paymentType
    useEffect(() => {
      loadPaymentType();
    }, []);
    const loadPaymentType = async () => {
      const result = await axios.get(`${url}tipo-pago`);
      setPaymentTypes(result.data);
    }

    
  return (
    <div>
      <h1>Dato de venta</h1>
      <form>
        <h2>Datos del cliente</h2>
        <label htmlFor="nombre">Nombre: </label>
        <input 
        type="text"
        className='client-form'
        placeholder='Nombre del cliente'
        name='client-name'
        id='client-name'
        onChange={(e) => {setClientName(e.target.value)}}
         />
         <label htmlFor="address">Direccion: </label>
        <input 
        type="text"
        className='client-form'
        placeholder='Direccion del cliente'
        name='client-address'
        id='client-address'
        onChange={(e) => {setClientAddress(e.target.value)}}
         />
         <label htmlFor="nombre">Nombre: </label>
        <input 
        type="checkbox"
        className='client-form'
        placeholder='Nombre del cliente'
        name='client-name'
        id='client-name'
        onChange={(e) => {setClientName(e.target.value)}}
         />
      </form>
    </div>
  )
}

export default SaleArticle
