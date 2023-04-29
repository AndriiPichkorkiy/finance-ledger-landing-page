import styled from "styled-components";

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 12px;
`;

export const SocialItem = styled.li`
  width: 35px;
  height: 35px;
  color: white;

  &:hover > a > svg {
    fill: ${(props) => props.hover || props.theme.accentColor};
  }
`;
