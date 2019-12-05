import React from "react";
import "./Card-list.style.css"

export const CardList = (props) => {
    return <div className="card-list">{ props.children }</div>;
}