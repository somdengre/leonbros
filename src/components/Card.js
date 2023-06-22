import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div class="card">
  <img class="card-img-top" src={props.image} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text">{props.description}</p>
  </div>
</div>
  )
}

export default Card