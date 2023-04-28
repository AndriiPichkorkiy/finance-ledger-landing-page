import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.textColorSecond};
  padding: 30px 20px;
`;

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 12px;
`;

export const FooterSocialItem = styled.li`
  width: 35px;
  height: 35px;
  fill: white;

  &:hover {
    fill: tomato;
  }
`;
