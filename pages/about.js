import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Paragraph>
        Hamro Pasal's business concept is to offer solutions to all tech-related problems at the best price in a sustainable way. Hamro Pasal was founded in 2021 and has grown into one of the leading technology sites. The content of this site is copyright protected and is the property of Hamro Pasal.
      </Paragraph>
    </AboutContainer>
  );
}

export default AboutUs;
