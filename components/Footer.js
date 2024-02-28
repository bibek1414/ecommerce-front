import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram,FaGoogle } from "react-icons/fa";


const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 40px;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    color: #fff;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;
const IconLink = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;
  
  &:hover {
    color: #00f; /* Change color on hover */
  }
`;

const CopyRight = styled.div`
  margin-top: 20px;
  color: #666;
`;

const Footer = () => (
  <FooterContainer>
    <div>
      <FooterLink href="/about">About Us</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/terms">Terms & Conditions</FooterLink>
    </div>
    <CopyRight>&copy; {new Date().getFullYear()} Hamro Pasal. All rights reserved.</CopyRight>
    <SocialIcons>
        <IconLink href="https://www.facebook.com"><FaFacebook /></IconLink>
        <IconLink href="https://www.twitter.com"><FaTwitter /></IconLink>
        <IconLink href="https://www.instagram.com"><FaInstagram /></IconLink>
        <IconLink href="https://www.google.com"><FaGoogle /></IconLink> 
      </SocialIcons>
  </FooterContainer>
);

export default Footer;
