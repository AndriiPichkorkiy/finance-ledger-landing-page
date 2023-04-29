import { CustomErrorMessage, ErrorIcon, FieldStyled, FieldWrapper, Placeholder } from "./Input.styled";
import worning from "../../assests/images/form/worning.svg"
import PropTypes from 'prop-types';

const Input = ({ field, form: { touched, errors }, placeholder, type }) => {
  return (
    <FieldWrapper style={{ position: "relative" }}>

      <FieldStyled {...field} type={type} />
      <Placeholder>{placeholder}</Placeholder>
      {touched[field.name] &&
        errors[field.name] &&
        <>
          <ErrorIcon>
            <object data={worning} width="100%" height="100%"> </object>
          </ErrorIcon>
          <CustomErrorMessage>{errors[field.name]}</CustomErrorMessage>
        </>
      }
    </FieldWrapper>
  )
}

export default Input;

Input.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    touched: PropTypes.bool,
    errors: PropTypes.object,
  }),
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}