import styled from "styled-components";
import { devices } from "../../../helpers/theme";

export const CasesSection = styled.section`
  padding: 56px 20px 40px 20px;
  /* display: flex;
  flex-direction: column; */
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
  /* width: 100%; */
  margin: 0;

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 18px;
  }
`;

export const GalleryItem = styled.li`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
