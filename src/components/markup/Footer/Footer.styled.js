import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColorMain};
  background-color: ${(props) => props.theme.textColorSecond};
  padding: 30px 20px;
  align-items: center;
`;
