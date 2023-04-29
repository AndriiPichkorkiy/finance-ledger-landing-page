import styled from "styled-components";

export const FieldWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 32px;
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

  &:focus ~ p,
  &:not([value=""]) ~ p {
    left: 0px;
    top: -50%;
    transform: translateY(0%);
  }
`;

export const Placeholder = styled.p`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.placeHolderColor};
  pointer-events: none;
`;

export const CustomErrorMessage = styled.div`
  position: absolute;
  right: 0%;
  color: tomato;
  font-size: 0.7rem;
  line-height: 150%;
`;

export const ErrorIcon = styled.div`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
