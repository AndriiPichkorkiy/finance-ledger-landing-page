import React from "react";
import { SocialItem, SocialList } from "./Socials.styled";
import PropTypes from 'prop-types';

import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const SocialsData = [
  {
    alt: "Facebook",
    adress: "./",
    props: {
      size: 35,
    },
    element: BsFacebook,
  },
  {
    alt: "Twitter",
    adress: "./",
    props: {
      size: 35,
    },
    element: BsTwitter,
  },
  {
    alt: "Youtube",
    adress: "./",
    props: {
      size: 40,
    },
    element: BsYoutube,
  },
  {
    alt: "Linkedin",
    adress: "./",
    props: {
      size: 35,
    },
    element: GrLinkedinOption,
  },
]

const Socials = ({ hover }) =>
  <SocialList>
    {SocialsData.map((social, i) => <SocialItem key={i} hover={hover}>
      <a href={social.adress} target="_blank" rel="noopener noreferrer">
        {React.createElement(social.element, social.props)}
      </a>
    </SocialItem>
    )}
  </SocialList>


export default Socials;

Socials.propTypes = {
  hover: PropTypes.string,
}