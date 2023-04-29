import styled from "styled-components";
import { devices } from "../../helpers/theme";

export const TitleH2 = styled.h2`
  margin-top: 16px;
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: 48px;
  }
`;
