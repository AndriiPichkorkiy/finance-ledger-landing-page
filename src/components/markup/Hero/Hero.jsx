// showcase

import { Container, HeroTitle, HeroSubTitle, HeroSection } from "./Hero.styled";
import heroBackground from "../../../assests/images/home/showcase.jpg"
import { ButtonHero } from "../../Buttons";

export default function Hero() {
  return (
    <HeroSection bg={heroBackground} id="hero">
      <Container >
        <HeroTitle >The Sky Is The Limit</HeroTitle>
        <HeroSubTitle>We provide world class financial assistance</HeroSubTitle>
        <ButtonHero />
      </Container>
    </HeroSection>

  )
}
