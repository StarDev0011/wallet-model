import styled from "styled-components";

export const AboutMissionWrapper = styled.div`
  padding: 0;
  display:flex;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  @media (max-width: 465px) {
    padding: 2%;
    display:block;
    margin-top: 50px;
  }
`;
export const SiteImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 465px) {
    position: relative;
    width:auto;
    height:auto;
  }
  img {
    width: 100%;
  }
`;
export const AboutMissionData = styled.div`
  grid-column: 6/-1;
  p {
    font-size: 24px;
    line-height: 2;
    margin-top: 1.5rem;
    letter-spacing: 0.03em;
    @media (max-width: 465px) {
      font-size: 16px;
    }
  }
`;

export const AboutMissionContainer = styled.div`
  display: block;
  width:50%;
  padding-right:5%;
  padding-left:5%;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 465px) {
    display:block;
    width:100%;
    padding-right:0%;
    padding-left:0%;
  }
`;