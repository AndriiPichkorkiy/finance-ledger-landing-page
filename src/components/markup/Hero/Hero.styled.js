import styled from "styled-components";

export const HeroSection = styled.section`
  background-size: cover;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(.jpg), url(${(props) => props.bg});
  background-position-x: center;
  background-position-y: center;
`;

export const Container = styled.div`
  padding: 160px 20px 104px;
  color: ${(props) => props.theme.textColorMain};
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
`;

export const HeroSubTitle = styled.h2`
  margin-top: 16px;

  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
`;
