import styled from "styled-components";
import { Field } from "formik";

export const CallbackSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.bgCallbackSection};
`;

export const CallbackPosterWrapper = styled.div`
  width: 320px;
  height: 220px;
`;

export const CallbackContent = styled.div`
  padding: 79px 20px;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 16px 8px;
  border-width: 0px;
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;

export const FieldStyledV2 = styled.input`
  width: 100%;
  padding: 16px 8px;
  border-width: 0px;
  border-radius: ${(props) => props.theme.borderRadius};

  &::placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;

export const CustomErrorMessage = styled.div`
  position: absolute;
  /* top: 50%; */
  right: 0%;
  /* transform: translate(-50%, -50%); */
  color: tomato;
`;
