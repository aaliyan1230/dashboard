import React from "react";
import SidebarSection from "./SidebarSection";
import SidebarSubsection from "./SidebarSubsection";

export default function Sidebar() {
  return (
    <div className="w-1/4 h-full backdrop-blur-2xl border-solid border-0 border-r-2 border-white">
      <div
        className="logo m-10 flex justify-center gap-2"
        style={{ font: "Meedori sans" }}
      >
        <img src={"/images/logo.png"} alt="logo" className="hf h-10 w-10" />{" "}
        VAULT PASS
      </div>
      <SidebarSection icon="/images/dashboard-ico.png" text="Dashboard" />
      <SidebarSection icon="/images/analytics.png" text="Analytics" />
      <SidebarSection icon="/images/stake.png" text="Stake" />
      <SidebarSection icon="/images/Bond.png" text="Bond" />
      <div className="m-3 mx-8">
        <p>Bond Discounts</p>
        <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
        <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
        <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
        <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
        <SidebarSubsection text="XIV-BNB LP" value="-16.28%" />
      </div>
      <SidebarSection icon="/images/buyPASS.png" text="Buy PASS" />
      <SidebarSection icon="/images/PriceChart.png" text="Price Chart" />
      <SidebarSection icon="/images/Documentation.png" text="Documentation" />

      <div className="flex justify-center gap-8 m-8">
        <span>
          <img src="../images/twitter.png" alt="twitter logo" />
        </span>
        <span>
          <img src="../images/discord.png" alt="discord logo" />
        </span>
        <span>
          <img src="../images/telegram.png" alt="telegram logo" />
        </span>
      </div>
    </div>
  );
}
