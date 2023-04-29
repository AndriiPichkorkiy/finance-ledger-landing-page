import ResponsiveImg from "../../ResponsiveImg/ResponsiveImg";
import { Socials } from "../../Socials";
import { TeamItem, TeamName, TeamImgWrapper, GalleryItemHover } from "./Team.styled";
import PropTypes from 'prop-types';

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

TeamCard.propTypes = {
  settings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    jpg: PropTypes.object.isRequired,
    webp: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
}