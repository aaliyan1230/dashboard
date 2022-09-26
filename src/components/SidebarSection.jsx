import React from "react";

export default function SidebarSection({icon, text}){
    return(
        <div className="flex">
            <span><img src={`${icon}`} alt="icon" /></span> {text}
        </div>
    );
}