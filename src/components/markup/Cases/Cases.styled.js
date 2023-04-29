import styled from "styled-components";
import { devices } from "../../../helpers/theme";

export const CasesSection = styled.section`
  padding: 56px 20px 40px 20px;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.bgSection};

  @media ${devices.tablet} {
    text-align: center;
  }
`;

export const CasesContent = styled.div`
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

export const CasesGalleryWrapper = styled.div`
  margin-top: 31px;
`;

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, 178px);
  grid-row-gap: 8px;
  margin: 0;

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(148px, auto);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(282px, auto);
  }
`;

export const GalleryItem = styled.li`
  cursor: pointer;

  @media ${devices.tablet} {
    aspect-ratio: 1.5067 / 1;
  }
  @media ${devices.laptop} {
    aspect-ratio: 1.4929 / 1;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageCaption = styled.div`
  margin: 0 auto;
`;
