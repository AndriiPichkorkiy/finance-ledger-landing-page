// types: hero, about, blog, submit

import { BtnIcon, ButtonEl } from "./Button.styled";
import btnIcon from "../../assests/images/gallery/next.png"

const Button = ({ type = "hero", title }) => {

  return (
    <ButtonEl>
      <BtnIcon src={btnIcon} alt="icon" />
      Read More
    </ButtonEl>
  );
}

export default Button;

// Button.protoTypes = {
//   type: PropTypes.string,
//   title: PropTypes.string
// }