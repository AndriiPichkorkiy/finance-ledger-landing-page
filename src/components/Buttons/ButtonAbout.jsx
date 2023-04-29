import { ButtonAboutEl } from "./Button.styled";
import PropTypes from 'prop-types';

const ButtonAbout = ({ onClick }) => {
  return (
    <ButtonAboutEl onClick={onClick}>
      Read More
    </ButtonAboutEl>
  );
}

export default ButtonAbout;

ButtonAbout.propTypes = {
  onClick: PropTypes.func,
}