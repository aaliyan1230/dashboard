import React from "react";

export default function SidebarSubsection({text, value}){

    return(
        <div className="flex ml-6 my-3 gap-10">
           <span className="text-start">{text}</span> <span className="text-end">{value}</span>
        </div>
    );
}