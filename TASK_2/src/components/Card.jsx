import React from "react";

function Card(props) {
  return (
    <div className="card">
      <ul>
        <li><img className="card-avatar card-item" src={props.avatar} alt="Avatar" /></li>
        <li><h2 className="card-name card-item">{props.name}</h2></li>
        <li><p className="card-email card-item">{props.email}</p></li>
      </ul>
    </div>
  )
}
export default Card;