import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  
 
  return (
    <Link to={`/${props.linkedto}`} class="card">
    <>

  <img class="card-img-top" src={props.image} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{props.description}</p>
  </div>
    </>
</Link>         
  )

  
}

export default Card