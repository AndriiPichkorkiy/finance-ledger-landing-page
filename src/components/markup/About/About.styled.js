import styled from "styled-components";
import { devices } from "../../../helpers/theme";
console.log("devices", devices);
export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.accentColor};

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const AboutPosterWrapper = styled.div`
  /* width: 320px;
  height: 220px; */
  @media ${devices.tablet} {
    min-width: 48%;
    max-width: 48%;
  }
`;
export const AboutPoster = styled.img``;
export const AboutContent = styled.div`
  padding-top: 79px;
  padding-bottom: 79px;

  padding-left: ${(props) => props.theme.paddingMobile};
  padding-right: ${(props) => props.theme.paddingMobile};
  @media ${devices.tablet} {
    padding-left: ${(props) => props.theme.paddingTablet};
    padding-right: ${(props) => props.theme.paddingTablet};
  }
  @media ${devices.laptop} {
    padding-left: ${(props) => props.theme.paddingTablet};
    padding-right: ${(props) => props.theme.paddingTablet};
  }
`;
