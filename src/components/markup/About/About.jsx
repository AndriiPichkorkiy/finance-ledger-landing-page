import aboutPoster from '../../../assests/images/home/people.jpg'

import { AboutSection, AboutPosterWrapper, AboutContent } from "./About.styled";
import { ButtonAbout } from "../../Buttons";
import { TitleH2 } from '../../TitleH2';

export default function About() {
  return (
    <AboutSection>
      <AboutPosterWrapper>
        <img src={aboutPoster} alt="team" />
      </AboutPosterWrapper>
      <AboutContent>
        <p>What you are looking for</p>
        <TitleH2>We provide bespoke solutions</TitleH2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <ButtonAbout />
      </AboutContent>
    </AboutSection>
  )
}
