import styled from "styled-components";

import { devices } from "../../../helpers/theme";

export const HeroSection = styled.section``;

export const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    animation: 3s linear 0s opacity-0-100;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 160px 20px 104px;
  @media ${devices.tablet} {
    padding: 378px 122px;
  }
  @media ${devices.laptop} {
    padding: 280px 270px;
    min-height: 768px;
  }
  color: ${(props) => props.theme.textColorMain};
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;

  @media ${devices.tablet} {
    font-size: 55px;
    line-height: 75px;
  }
`;

export const HeroSubTitle = styled.p`
  display: block;
  margin: 16px 0px 0px 0px;

  font-size: 26px;
  line-height: 32px;
  text-align: center;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${devices.tablet} {
    line-height: 55.47px;
  }
`;
