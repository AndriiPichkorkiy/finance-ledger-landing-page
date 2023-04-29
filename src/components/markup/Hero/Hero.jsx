import heroBgx1 from "../../../assests/images/home/showcase.jpg";
import heroBgx2 from "../../../assests/images/home/showcase@2x.jpg";
import heroBgx1WEBP from "../../../assests/images/home/showcase.webp";
import heroBgx2WEBP from "../../../assests/images/home/showcase@2x.webp";

const img = {
  src: heroBgx1,
  alt: "Blog",
  jpg: {
    x1: heroBgx1,
    x2: heroBgx2,
  },
  webp: {
    x1: heroBgx1WEBP,
    x2: heroBgx2WEBP,
  },
}

import { Container, HeroTitle, HeroSubTitle, HeroSection, BackgroundWrapper } from "./Hero.styled";
import heroBackground from "../../../assests/images/home/showcase.jpg"
import { ButtonHero } from "../../Buttons";
import ResponsiveImg from "../../ResponsiveImg/ResponsiveImg";

export default function Hero() {
  return (
    <HeroSection bg={heroBackground} id="hero">

      <Container >
        {/* the BackgroundWrapper is analog background-image: image-set */}
        <BackgroundWrapper>
          <ResponsiveImg settings={img} />
        </BackgroundWrapper>
        <HeroTitle >The Sky Is The Limit</HeroTitle>
        <HeroSubTitle>We provide world class financial assistance</HeroSubTitle>
        <ButtonHero />
      </Container>
    </HeroSection>

  )
}
