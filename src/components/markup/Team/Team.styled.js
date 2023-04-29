import styled from "styled-components";
import { devices } from "../../../helpers/theme";

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.accentSecond};
  padding: 72px 20px 50px 20px;

  @media ${devices.tablet} {
    padding-left: ${(props) => props.theme.paddingTablet};
    padding-right: ${(props) => props.theme.paddingTablet};
  }
`;

export const TeamImgWrapper = styled.div`
  position: relative;
  width: auto;
  aspect-ratio: 1.715 / 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px black;
    * {
      opacity: 1;
    }
  }
`;

export const TeamContent = styled.div`
  @media ${devices.tablet} {
    text-align: center;
  }
`;

export const TeamList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(280px, auto);
  grid-row-gap: 30px;
  width: 100%;
  margin: 0;
  margin-top: 63px;

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 18px;
  }
`;

export const TeamItem = styled.li`
  text-align: center;
`;

export const TeamName = styled.h3`
  margin: 16px 0px 8px 0;
  font-size: 20px;
  line-height: 27px;

  @media ${devices.tablet} {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const GalleryItemHover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #00000044;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;
