import React from "react";
import "./Search-box.style.css";

export const Search = ({placeholder,handleChange}) => (
    <input
        type="search"
        placeholder = {placeholder}
        onChange = {handleChange}
    />
);