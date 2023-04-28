import aboutPoster from '../../../assests/images/home/people.jpg'
import aboutPoster2x from '../../../assests/images/home/people@2x.jpg'
import aboutPosterWebp from '../../../assests/images/home/people.webp'
import aboutPosterWebp2x from '../../../assests/images/home/people@2x.webp'

import { AboutSection, AboutPosterWrapper, AboutContent } from "./About.styled";
import { ButtonAbout } from "../../Buttons";
import { TitleH2 } from '../../TitleH2';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';

const img = {
  src: aboutPoster,
  alt: "Team",
  jpg: {
    x1: aboutPoster,
    x2: aboutPoster2x,
  },
  webp: {
    x1: aboutPosterWebp,
    x2: aboutPosterWebp2x,
  },
}

export default function About() {
  return (
    <AboutSection>
      <AboutPosterWrapper>
        <ResponsiveImg settings={img} />
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
