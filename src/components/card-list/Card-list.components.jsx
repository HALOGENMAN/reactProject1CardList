import React from "react";
import "./Card-list.style.css"
import { Card } from "../card/Card.components"

export const CardList = (props) => {
    return (<div className="card-list">
         {
            props.monster.map(monster => (
                <Card key={ monster.id }  monsters={ monster } />
            ))
         
        }
    </div>);
}