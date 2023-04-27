import styled from "styled-components";
import { TitleH2 } from "../../TitleH2/TitleH2";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.accentColor};
`;

export const AboutPosterWrapper = styled.div`
  width: 320px;
  height: 220px;
`;
export const AboutPoster = styled.img``;
export const AboutContent = styled.div`
  padding: 79px 20px;
`;

// export const TitleAbout = styled(TitleH2)`
//   color: ;
// `;
