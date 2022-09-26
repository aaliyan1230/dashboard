import React from "react";
import SidebarSection from "./SidebarSection"
import SidebarSubsection from "./SidebarSubsection"

export default function Sidebar() {
    return (
      <div className="Sidebar bg-slate-700 w-1/5 h-full backdrop-blur-sm">
        <div className="logo m-12" style={{font:'Meedori sans'}}>
          <span><img src={require("../images/logo.png")} alt="logo" /></span> VAULT PASS
        </div>
        <SidebarSection icon="/images/dashboard-ico.png" text="Dashboard" />
        <SidebarSection icon="/images/analytics.png" text="Analytics" />
        <SidebarSection icon="/images/stake.png" text="Stake" />
        <SidebarSection icon="/images/Bond.png" text="Bond" />

        <p>Bond Discounts</p>
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
          <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />

        <SidebarSection icon="/images/buyPASS.png" text="Buy PASS" />
        <SidebarSection icon="/images/PriceChart.png" text="Price Chart" />
        <SidebarSection icon="/images/Documentation.png" text="Documentation" />

        <div className="flex">
          <span><img src="../images/twitter.png" alt="twitter logo" /></span>
          <span><img src="../images/discord.png" alt="discord logo" /></span>
          <span><img src="../images/telegram.png" alt="telegram logo" /></span>
        </div>
      </div>
    );
  }