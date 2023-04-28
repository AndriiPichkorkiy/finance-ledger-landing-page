import styled from "styled-components";

export const ButtonEl = styled.button`
  cursor: pointer;
  margin-top: 24px;
  padding: 16px 32px;
  display: inline-flex;
  align-items: center;

  color: ${(props) => props.theme.textColorMain};
  font-size: 18px;
  line-height: 25px;

  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.btnType1Bg};

  &:hover {
    background: ${(props) => props.theme.btnType1BgHover};
  }
`;

export const BtnIcon = styled.img`
  height: 18px;
  width: 9px;
  margin-right: 8px;
`;

export const ButtonAboutEl = styled(ButtonEl)`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.textColorMain};
  background: ${(props) => props.theme.btnType2Bg};

  &:hover {
    background: ${(props) => props.theme.btnType2BgHover};
    // btnType2TextColor
    border-color: ${(props) => props.theme.btnType2TextColor};
    color: ${(props) => props.theme.btnType2TextColor};
  }
`;

export const ButtonBlogEl = styled(ButtonEl)`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.textColorMain};
  background: ${(props) => props.theme.btnType3Bg};

  &:hover {
    background: ${(props) => props.theme.btnType3BgHover};
    // btnType2TextColor
    border-color: ${(props) => props.theme.btnType3TextColor};
    color: ${(props) => props.theme.btnType3TextColor};
  }
`;
