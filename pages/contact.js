import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const InfoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  margin-bottom: 5px;
`;

const SocialMediaLinks = styled.div`
  margin-top: 20px;
`;

const Link = styled.a`
  margin-right: 15px;
  color: #222; // Adjust color based on your theme
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactHeading>Contact Information</ContactHeading>
      <ContactInfo>
        <InfoTitle>Our Office</InfoTitle>
        <InfoText>Hetauda-05,Makwanpur</InfoText>
        <InfoText>Phone: +977 9860425440</InfoText>
        <InfoText>Email: admin@hamropasal.com</InfoText>
      </ContactInfo>
      <ContactInfo>
        <InfoTitle>Customer Service</InfoTitle>
        <InfoText>For customer service inquiries, please contact:</InfoText>
        <InfoText>Phone: +977 9860425440</InfoText>
        <InfoText>Email: support@hamropasal.com</InfoText>
      </ContactInfo>
          </ContactContainer>
  );
};

export default ContactPage;
