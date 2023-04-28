import styled from "styled-components";
import { Field } from "formik";

export const FieldStyled1 = styled(Field)`
  width: 100%;
  padding: 16px 8px;
  border-width: 0px;
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const FieldWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const FieldStyled = styled.input`
  width: 100%;
  padding: 16px 8px;
  border-width: 0px;
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const CustomErrorMessage = styled.div`
  position: absolute;
  right: 0%;
  color: tomato;
`;

export const ErrorIcon = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
