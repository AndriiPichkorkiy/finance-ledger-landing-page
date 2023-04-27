import { BtnIcon, ButtonEl } from "./Button.styled";
import btnIcon from "../../assests/images/gallery/next.png"
import btnIcon2 from "../../assests/images/fa-solid_angle-right.svg"

const ButtonHero = ({ onClick }) => {

  return (
    <ButtonEl>
      <BtnIcon src={btnIcon2} alt="icon" />
      Read More
    </ButtonEl>
  );
}

export default ButtonHero;

// Button.protoTypes = {
//   type: PropTypes.string,
//   title: PropTypes.string
// }