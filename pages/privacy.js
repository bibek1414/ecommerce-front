import React from 'react';
import styled from 'styled-components';
import Center from '../components/Center'; // Import Center component if needed

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PrivacyHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const PrivacyContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

const PrivacyPage = () => {
  return (
    <Center>
      <PrivacyContainer>
        <PrivacyHeading>Privacy Policy</PrivacyHeading>
        <PrivacyContent>
          <p>
            At Hamro Pasal, we prioritize the protection and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
          </p>
          <p>
            When you engage with Hamro Pasal, we may collect personal information such as your name, email address, and contact details to provide you with a seamless shopping experience. This information is used for order processing, communication, and improving our services.
          </p>
          <p>
            We are committed to maintaining the confidentiality of your data and do not share it with third parties without your consent, except when necessary for fulfilling orders or legal obligations. Your information is stored securely and protected against unauthorized access or disclosure.
          </p>
          <p>
            Our platform utilizes advanced technologies, including Next.js, Tailwind CSS, MongoDB, and Google Authentication, to ensure the highest level of security and performance. We continuously monitor and update our systems to safeguard your data and prevent any unauthorized access or misuse.
          </p>
          <p>
            By using Hamro Pasal, you consent to the terms of this Privacy Policy. If you have any questions or concerns about our privacy practices or wish to exercise your rights regarding your personal data, please contact us.
          </p>
        </PrivacyContent>
      </PrivacyContainer>
    </Center>
  );
};

export default PrivacyPage;
