import React from "react";

export default function Tile({title, value}){
    return(
        <div>
            <p>{title}</p>
            <p>{value}</p>
        </div>
    );
}