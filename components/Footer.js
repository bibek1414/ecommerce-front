import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
import Center from './Center';

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
  color: ${props => props.defaultColor}; /* Set default color based on props */
  margin-top: 10px;

  font-size: 34px; /* Adjust the font size for larger icons */
  transition: color 0.3s;

  &:hover {
    color: ${props => props.hoverColor}; /* Change color on hover based on props */
  }
`;

const CopyRight = styled.div`
  margin-top: 20px;
  color: #666;
`;

const Logo = styled.img`
  width: 50px; /* Adjust the width to increase the size of logos */
  height: auto; /* Maintain aspect ratio */
  margin: 0 100px; /* Add margin to create space between logos */
`;

const BusinessConcept = styled.p`
  margin-top: 20px;
  color: #aaa;
  font-size: 14px;
  padding: 0 20px; /* Add some padding if needed */
  text-align: center;
`;

const LogoImage = styled.img`
  width: 150px; /* Adjust size as needed */
  height: auto;
  margin: 0 auto 40px; /* Adds space between logo and text */
`;

const Footer = () => (
  <FooterContainer>
    <div>
      <FooterLink href="/about">About Us</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/terms">Terms & Conditions</FooterLink>
    </div>
    <SocialIcons>
      <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" defaultColor="#fff" hoverColor="#1877f2"><FaFacebook /></IconLink>
      <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" defaultColor="#fff" hoverColor="#1da1f2"><FaTwitter /></IconLink>
      <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" defaultColor="#fff" hoverColor="#c13584"><FaInstagram /></IconLink>
      <IconLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" defaultColor="#fff" hoverColor="#34A853"><FaGoogle /></IconLink>
    </SocialIcons>
    <CopyRight>&copy; {new Date().getFullYear()} Hamro Pasal. All rights reserved.</CopyRight>
  </FooterContainer>
);

export default Footer;
