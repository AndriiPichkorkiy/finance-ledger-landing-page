import { ButtonEl } from "./Button.styled";
import PropTypes from 'prop-types';

const ButtonCallback = ({ onClick }) => {
  return (
    <ButtonEl onClick={onClick}>
      Send
    </ButtonEl>
  );
}

export default ButtonCallback;

ButtonCallback.propTypes = {
  onClick: PropTypes.func,
}