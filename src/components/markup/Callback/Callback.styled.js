import styled from "styled-components";
import { Field } from "formik";
import { devices } from "../../../helpers/theme";

export const CallbackSection = styled.section`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorSecond};
  background-color: ${(props) => props.theme.bgCallbackSection};

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const CallbackPosterWrapper = styled.div`
  /* width: 320px;
  height: 220px; */
  @media ${devices.tablet} {
    min-width: 48%;
    max-width: 48%;
  }
`;

export const CallbackContent = styled.div`
  width: 100%;
  padding-top: 79px;
  padding-bottom: 79px;

  padding-left: ${(props) => props.theme.paddingMobile};
  padding-right: ${(props) => props.theme.paddingMobile};
  @media ${devices.tablet} {
    padding-left: ${(props) => props.theme.paddingTablet};
    padding-right: ${(props) => props.theme.paddingTablet};
  }
  @media ${devices.laptop} {
    padding-left: ${(props) => props.theme.paddingTablet};
    padding-right: ${(props) => props.theme.paddingTablet};
  }
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
