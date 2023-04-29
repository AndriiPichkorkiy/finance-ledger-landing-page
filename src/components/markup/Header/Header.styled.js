import styled from "styled-components";
import { devices } from "../../../helpers/theme";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: 22px;
  color: ${(props) => props.theme.textColorMain};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// logo
export const Logo = styled.a`
  font-size: 28px;
  line-height: 38px;
  display: flex;
  column-gap: 8px;

  @media ${devices.tablet} {
    font-size: 35px;
    line-height: 48px;
  }

  &:hover * {
    transform: scale(1.05);
  }
`;

export const LogoIconWrapper = styled.div`
  display: block;
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

export const NavEl = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${(props) => props.theme.accentColor};
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
