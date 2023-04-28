import { ButtonEl } from "./Button.styled";

const ButtonCallback = ({ onClick }) => {
  return (
    <ButtonEl>
      Send
    </ButtonEl>
  );
}

export default ButtonCallback;

// Button.protoTypes = {
//   type: PropTypes.string,
//   title: PropTypes.string
// }