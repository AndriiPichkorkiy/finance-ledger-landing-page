import { ButtonBlogEl } from "./Button.styled";
import PropTypes from 'prop-types';

const ButtonBlog = ({ onClick }) => {
  return (
    <ButtonBlogEl onClick={onClick}>
      Read More
    </ButtonBlogEl>
  );
}

export default ButtonBlog;

ButtonBlog.propTypes = {
  onClick: PropTypes.func,
}