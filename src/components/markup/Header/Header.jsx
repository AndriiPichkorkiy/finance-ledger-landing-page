import React from 'react'
import { Container, Logo, LogoFirstWord, LogoIconWrapper, LogoSecondWord, NavList } from './Header.styled'
import logoIcon from '../../../assests/images/logo-icon.svg'

export default function Header() {
  return (
    <header>
      <Container>
        {/* Logo */}
        {/* <Logo> */}
        <Logo href="./">
          <LogoIconWrapper>
            <img src={logoIcon} alt="logo" />
          </LogoIconWrapper>
          <LogoFirstWord>Finance</LogoFirstWord>
          <LogoSecondWord>Ledger</LogoSecondWord>
        </Logo>
        {/* </Logo> */}
        {/* Havigation */}
        <nav>
          <NavList>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Cases</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </NavList>
        </nav>
      </Container>
    </header>

  )
}
