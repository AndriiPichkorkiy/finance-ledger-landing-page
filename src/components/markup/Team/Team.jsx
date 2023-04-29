import { TeamSection, TeamContent, TeamList } from "./Team.styled";
import { TitleH2 } from '../../TitleH2';
import { team } from "./teamData";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <TeamSection>
      <TeamContent>
        <p>What you are looking for</p>
        <TitleH2>We provide bespoke solutions</TitleH2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      </TeamContent>
      <TeamList>
        {team.map((member, i) => <TeamCard key={i} settings={member} />)}
      </TeamList>

    </TeamSection>
  )
}
