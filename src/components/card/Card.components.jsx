import React from "react";
import "./Card.style.css"

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monsters.id}?set=set2&amp;size=180x180`}/>
        <h2> { props.monsters.name }  </h2>
        <p>{ props.monsters.email }</p>
    </div>
); 

