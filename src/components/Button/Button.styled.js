import styled from "styled-components";

export const ButtonEl = styled.button`
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
  width: 18px;
`;
