import React from "react";
import SidebarSection from "./SidebarSection"
import SidebarSubsection from "./SidebarSubsection"

export default function Sidebar() {
    return (
      <div className="Sidebar w-1/5 " style={{backgroundImage:`url(${background})`}}>
        <div className="logo ">
          <span><img src="../public/logo.png" alt="logo" /></span>
          VAULT PASS
        </div>
        <SidebarSection icon="..public/abc.png" text="Dashboard" />
        <SidebarSection icon="..public/abc.png" text="Dashboard" />
        <SidebarSection icon="..public/abc.png" text="Dashboard" />
        <SidebarSection icon="..public/abc.png" text="Dashboard" />

        <p>Bond Discounts</p>
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />

        <SidebarSection icon="..public/abc.png" text="Dashboard" />
        <SidebarSection icon="..public/abc.png" text="Dashboard" />
        <SidebarSection icon="..public/abc.png" text="Dashboard" />

        <div>
          <span><img src="../public/twitter.png" alt="twitter logo" /></span>
          <span><img src="../public/discord.png" alt="discord logo" /></span>
          <span><img src="../public/telegram.png" alt="telegram logo" /></span>
        </div>
      </div>
    );
  }