import { CustomErrorMessage, ErrorIcon, FieldStyled, FieldWrapper } from "./Input.styled";

const Input = ({ field, form: { touched, errors } }) => (
  <FieldWrapper style={{ position: "relative" }}>
    <FieldStyled {...field} type="email" placeholder="Enter email*" />
    {touched[field.name] &&
      errors[field.name] &&
      <>
        <ErrorIcon>
          THE ICON AAAAHAHAHA
        </ErrorIcon>
        <CustomErrorMessage>{errors[field.name]}</CustomErrorMessage>
      </>
    }
  </FieldWrapper>
)

export default Input;