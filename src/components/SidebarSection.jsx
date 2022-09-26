import React from "react";

export default function SidebarSection({icon, text}){
    return(
        <div className="flex m-2 mx-3 items-center">
            <span className="m-2"><img src={`${icon}`} alt="icon" /></span> {    text}
        </div>
    );
}