import React from "react";



export default function SidebarSubsection({text, value}){
    

    return(
        <div>
            {text}<span>{value}</span>
        </div>
    );
}