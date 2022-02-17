import {
  AboutMissionContainer,
  AboutMissionData,
  AboutMissionWrapper,
  SiteImageWrapper
} from "./styles";

import React from "react";
import { SiteContainer } from "../../../atoms/SiteContainer";
import { SiteTitle } from "../../../atoms/SiteTitle";

const AboutMission = () => {
  return (
    <AboutMissionWrapper>
      <SiteImageWrapper>
        <img alt="L'Dezen image" src="/images/mission-img1.png" />
      </SiteImageWrapper>
      <AboutMissionContainer>
        <AboutMissionData>
          <SiteTitle align="left">Mission</SiteTitle>
          <p>Curate fine-jewelery from artists around the world</p>
            <br />
          <p>Onboard the next wave of NFT collectors</p>
            <br />
          <p>Transform the traditional shopping experience</p>
        </AboutMissionData>
      </AboutMissionContainer>
    </AboutMissionWrapper>
  );
};

export default AboutMission;