import { BtnIcon, ButtonEl } from "./Button.styled";
import btnIcon from "../../assests/images/fa-solid_angle-right.svg"
import PropTypes from 'prop-types';

const ButtonHero = ({ onClick }) => {
  return (
    <ButtonEl>
      <BtnIcon src={btnIcon} alt="icon" onClick={onClick} />
      Read More
    </ButtonEl>
  );
}

export default ButtonHero;

ButtonHero.propTypes = {
  onClick: PropTypes.func,
}