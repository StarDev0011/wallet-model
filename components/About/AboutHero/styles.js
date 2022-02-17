import styled from "styled-components";

export const AboutHeroWrapper = styled.section`
  padding: 10rem 0;
  @media (max-width: 465px) {
    padding:2%
  }
`;

export const AboutImageWrapper = styled.div`
width:100%;
text-align:center;
margin-top: 50px;
margin-bottom: 100px;
@media (max-width: 465px) {
  margin-top: 25px;
  margin-bottom: 50px;
}
img {
  width: 100%;
}
`;

export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 54px;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
  @media (max-width: 465px) {
    font-size: 36px;
  }
`;
export const AboutSubtitle = styled.h4`
  text-align: left;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.headingFont};
  font-weight: bold;
`;
export const AboutParagraph = styled.p`
  font-size: 24px;
  text-align: left;
  margin-top: 2.4rem;
  line-height: 1.8;
  @media (max-width: 465px) {
    font-size:18px;
  }
`;
export const AboutVideoWrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 550px;
  @media (max-width: 465px) {
    margin-top: 50px;
  }
`;