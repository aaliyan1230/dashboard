import React from "react";

export default function Tile({title, value}){
    return(
        <div className="tile rounded bg-white backdrop-blur-3xl bg-opacity-50">
            <p className="fd text-xl">{title}</p>
            <p className="fd text-4xl">{value}</p>
        </div>
    );
}