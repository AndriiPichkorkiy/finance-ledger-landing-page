import React from "react";
import { FooterSection, FooterSocialItem, FooterSocialList } from "./Footer.styled";

import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Socials = [
  {
    alt: "Facebook",
    adress: "./",
    props: {
      size: 35,
      style: { fill: "inherit" }
    },
    element: BsFacebook,
  },
  {
    alt: "Twitter",
    adress: "./",
    props: {
      size: 35,
      style: { fill: "inherit" }
    },
    element: BsTwitter,
  },
  {
    alt: "Youtube",
    adress: "./",
    props: {
      size: 40,
      style: { fill: "inherit" }
    },
    element: BsYoutube,
  },
  {
    alt: "Linkedin",
    adress: "./",
    props: {
      size: 35,
      style: { fill: "inherit" }
    },
    element: GrLinkedinOption,
  },
]

const Footer = () => {
  return (
    <FooterSection>
      <FooterSocialList>
        {Socials.map((social, i) => {
          return <FooterSocialItem key={i}>
            <a href={social.adress} target="_blank" rel="noopener noreferrer" alt={social.alt}>
              {React.createElement(social.element, social.props)}
            </a>
          </FooterSocialItem>
        })}
      </FooterSocialList>
      <p>Copyright © 2021 - FinanceLedger</p>
    </FooterSection>
  );
}

export default Footer;