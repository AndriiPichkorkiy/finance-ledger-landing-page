// showcase

import { Container, HeroTitle, HeroSubTitle } from "./About.styled";
import heroBackground from "../../../assests/images/home/showcase.jpg"
import { Button } from "../../Button";

export default function Hero() {
  return (
    <Container bg={heroBackground}>
      <HeroTitle >The Sky Is The Limit</HeroTitle>
      <HeroSubTitle>We provide world class financial assistance</HeroSubTitle>
      <Button />
    </Container>
  )
}
