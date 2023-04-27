import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 22px;
  color: ${(props) => props.theme.textColorMain};
  /* background-color: black; */
`;

// logo
export const Logo = styled.a`
  display: block;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  display: flex;
  column-gap: 8px;
`;

export const LogoIconWrapper = styled.div`
  display: inline-block;
  width: 39.31px;
  height: 35px;
`;

export const LogoFirstWord = styled.span`
  color: ${(props) => props.theme.accentColor};
`;

export const LogoSecondWord = styled.span`
  color: ${(props) => props.theme.colorTextMain};
`;

//nav

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

// export const NavItem = styled.li`
/* line-height: 22px; */
// `;
