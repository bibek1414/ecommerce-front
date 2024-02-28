import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 40px;
`;

const FooterLink = styled.a`
display: inline-block;
  color: #aaa;
  text-decoration: none;
  margin: 0 15px;
  position: relative;

  &:hover {
    color: #fff;
  }
`;

const TooltipContent = styled.div`
  visibility: hidden;
  width: 280px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }

  ${FooterLink}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 34px;
  transition: color 0.3s;
  
  &:hover {
    color: ${props => props.hoverColor};
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
      <FooterLink href="/contact">
        Contact
        <TooltipContent>
          Email: chakre@gmail.com<br/>
          Phone: +9771234586978<br/>
          Location: Hetauda, Nepal
        </TooltipContent>
      </FooterLink>
      <FooterLink href="/privacy">Privacy Policy</FooterLink>
      <FooterLink href="/terms">Terms & Conditions</FooterLink>
    </div>
    <SocialIcons>
      <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" hoverColor="#1877f2"><FaFacebook /></IconLink>
      <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" hoverColor="#1da1f2"><FaTwitter /></IconLink>
      <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" hoverColor="#c13584"><FaInstagram /></IconLink>
      <IconLink href="https://www.google.com" target="_blank" rel="noopener noreferrer" hoverColor="#34A853"><FaGoogle /></IconLink>
    </SocialIcons>
    <CopyRight>&copy; {new Date().getFullYear()} Hamro Pasal. All rights reserved.</CopyRight>
  </FooterContainer>
);

export default Footer;
