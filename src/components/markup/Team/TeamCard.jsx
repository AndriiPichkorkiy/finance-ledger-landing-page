import ResponsiveImg from "../../ResponsiveImg/ResponsiveImg";
import { TeamItem, TeamName, TeamImgWrapper } from "./Team.styled";

const TeamCard = ({ settings }) => {
  return (
    <TeamItem>
      <TeamImgWrapper>
        <ResponsiveImg settings={settings} />
      </TeamImgWrapper>

      <TeamName>{settings.name}</TeamName>
      <p>{settings.post}</p>
    </TeamItem>
  );
}

export default TeamCard;