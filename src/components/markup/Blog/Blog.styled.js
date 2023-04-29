import styled from "styled-components";
import { devices } from "../../../helpers/theme";

export const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.bgBlogSection};

  @media ${devices.tablet} {
    flex-direction: row-reverse;
  }
`;

export const BlogPosterWrapper = styled.div`
  @media ${devices.tablet} {
    min-width: 50%;
  }
`;

export const BlogContent = styled.div`
  padding-top: 48px;
  padding-bottom: 58px;

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
