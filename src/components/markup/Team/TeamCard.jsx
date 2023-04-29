import ResponsiveImg from "../../ResponsiveImg/ResponsiveImg";
import { Socials } from "../../Socials";
import { TeamItem, TeamName, TeamImgWrapper, GalleryItemHover } from "./Team.styled";

const TeamCard = ({ settings }) => {
  return (
    <TeamItem>
      <TeamImgWrapper>
        <ResponsiveImg settings={settings} />
        <GalleryItemHover>
          <Socials hover={"#FFFFFFCC"} />
        </GalleryItemHover>
      </TeamImgWrapper>

      <TeamName>{settings.name}</TeamName>
      <p>{settings.post}</p>
    </TeamItem>
  );
}

export default TeamCard;