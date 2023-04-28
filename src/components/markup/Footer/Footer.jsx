import { FooterSection, FooterSocialItem, FooterSocialList } from "./Footer.styled";

import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";


const Footer = () => {
  return (
    <FooterSection>
      <FooterSocialList>
        {/* BsFacebook */}
        <FooterSocialItem>
          <BsFacebook style={{ fill: "inherit" }} size="35" />
        </FooterSocialItem>

        {/* FooterSocialItem */}
        <FooterSocialItem>
          <BsTwitter style={{ fill: "inherit" }} size="35" />
        </FooterSocialItem>

        {/* {BsYoutube } */}
        <FooterSocialItem>
          <BsYoutube style={{ fill: "inherit" }} size="35" />
        </FooterSocialItem>

        {/* {FooterSocialList} */}
        <FooterSocialItem>
          <GrLinkedinOption style={{ fill: "inherit" }} size="35" />
        </FooterSocialItem>

      </FooterSocialList>
      <p>Copyright © 2021 - FinanceLedger</p>
    </FooterSection>
  );
}

export default Footer;