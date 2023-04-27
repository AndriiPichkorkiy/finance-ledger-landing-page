import styled from "styled-components";

import heroBgx1JPG from "../../../assests/images/home/showcase.jpg";
import heroBgx1WEBP from "../../../assests/images/home/showcase.webp";
import heroBgx2JPG from "../../../assests/images/home/showcase@2x.jpg";
import heroBgx2WEBP from "../../../assests/images/home/showcase@2x.webp";

// export const HeroSection = styled.section`
//   background-size: cover;

//   background-image: image-set(
//     url(http://localhost:4200/src/51cab55d982ce4bcedb5.jpg) 1x,
//     url(http://localhost:4200/src/ae588206237bf5dbfd39.webp) 1x
//   );
//   /* background-image: -webkit-image-set(
//     url(http://localhost:4200/src/51cab55d982ce4bcedb5.jpg) 1x,
//     url(http://localhost:4200/src/ae588206237bf5dbfd39.webp) 1x
//   ); */

//   background-position-x: center;
//   background-position-y: center;
// `;

export const HeroSection = styled.section`
  background-size: cover;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${heroBgx1JPG});

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

export const HeroSubTitle = styled.p`
  display: block;
  margin: 16px 0px 0px 0px;

  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
`;
