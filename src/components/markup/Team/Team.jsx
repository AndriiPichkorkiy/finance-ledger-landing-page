



import { TeamSection, TeamContent, TeamList } from "./Team.styled";
import { ButtonAbout } from "../../Buttons";
import { TitleH2 } from '../../TitleH2';
import { team } from "./teamData";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <TeamSection>
      <TeamContent>
        <p>What you are looking for</p>
        <TitleH2>We provide bespoke solutions</TitleH2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <ButtonAbout />
      </TeamContent>
      <TeamList>
        {team.map((member, i) => <TeamCard key={i} settings={member} />)}
      </TeamList>

    </TeamSection>
  )
}
