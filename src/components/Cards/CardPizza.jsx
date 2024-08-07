import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faEye, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'

const CardPizza = (pizza) => {
  return (
    <div>
        <div className="card">
          <img src={pizza.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <p className="card-text">Ingredientes:</p>
            <div className='d-flex flex-row'>
              <FontAwesomeIcon icon={faPizzaSlice} />
              <p className="card-text pizzaIngredients d-flex flex-row">
                {pizza.ingredients.join(", ")}</p>
            </div>
 
            <p className="card-text">Precio: ${pizza.price}</p>
            <div className='d-flex flex-row justify-content-between'>
              <a href="#" className="btn btn-primary">Ver mas <FontAwesomeIcon icon={faEye} /></a>
              <a href="#" className="btn btn-primary">Agregar <FontAwesomeIcon icon={faCartShopping} /> </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardPizza
