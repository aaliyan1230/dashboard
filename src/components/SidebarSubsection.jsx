import React from "react";

export default function SidebarSubsection({text, value}){

    return(
        <div className="flex">
            {text}<span>{value}</span>
        </div>
    );
}