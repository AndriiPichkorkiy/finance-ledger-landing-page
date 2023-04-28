import { BtnIcon, ButtonEl } from "./Button.styled";
import btnIcon from "../../assests/images/fa-solid_angle-right.svg"

const ButtonHero = ({ onClick }) => {

  return (
    <ButtonEl>
      <BtnIcon src={btnIcon} alt="icon" />
      Read More
    </ButtonEl>
  );
}

export default ButtonHero;

// Button.protoTypes = {
//   type: PropTypes.string,
//   title: PropTypes.string
// }