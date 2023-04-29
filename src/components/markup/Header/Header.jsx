import React, { useEffect, useState } from 'react'
import { Container, Logo, LogoFirstWord, LogoIconWrapper, LogoSecondWord, NavEl, NavItem, NavList } from './Header.styled'
import logoIcon from '../../../assests/images/logo-icon.svg'

export default function Header() {
  const [isHeaderBlack, setIsHeaderBlack] = useState(false);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const doSomething = (scrollPosition) => {
      if (window.innerWidth >= 768) {
        if (scrollPosition > 120) setIsHeaderBlack(true)
        else setIsHeaderBlack(false)
      } else {
        if (scrollPosition > 62) setIsHeaderBlack(true)
        else setIsHeaderBlack(false)
      }

    }

    const scrollEvent = () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    }
    document.addEventListener("scroll", scrollEvent)

    return () => {
      document.removeEventListener("scroll", scrollEvent)
    }
  }, [])


  return (
    <header >
      <Container style={isHeaderBlack ? { background: "#000000CC" } : null}>
        {/* Logo */}
        <Logo href="./">
          <LogoIconWrapper>
            <img src={logoIcon} alt="logo" />
          </LogoIconWrapper>
          <LogoFirstWord>Finance</LogoFirstWord>
          <LogoSecondWord>Ledger</LogoSecondWord>
        </Logo>
        {/* Havigation */}
        <NavEl>
          <NavList>
            <NavItem><a href="#hero">Home</a></NavItem>
            <NavItem><a href="#about">About</a></NavItem>
            <NavItem><a href="#cases">Cases</a></NavItem>
            <NavItem><a href="#blog">Blog</a></NavItem>
            <NavItem><a href="#contact">Contact</a></NavItem>
          </NavList>
        </NavEl>
      </Container>
    </header>

  )
}
