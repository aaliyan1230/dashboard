import React from "react";

export default function SidebarSection({img, text}){
    return(
        <div>
            <span><img src={img} alt="icon" /></span> {text}
        </div>
    );
}