import React from "react";
import Hero from "./Hero";
import ConverterPage from "./ConverterPage";
import SendMoneyFeatures from "./SendMoneyFeatures";
import ReceiveMoneyFeature from "./RecieveMoneyFeature";
import BannerFeatures from "./BannerFeatures";

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <ConverterPage />
        <SendMoneyFeatures />
        <ReceiveMoneyFeature />
        <BannerFeatures />
        
    </div>
  );
};

export default LandingPage;
