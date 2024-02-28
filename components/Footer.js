import styled from 'styled-components';

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
  </FooterContainer>
);

export default Footer;
