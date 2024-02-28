import React from 'react';
import styled from 'styled-components';
import Center from '../components/Center'; // Import Center component if needed

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const TermsHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TermsContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

const TermsPage = () => {
  return (
    <Center>
      <TermsContainer>
        <TermsHeading>Terms and Conditions</TermsHeading>
        <TermsContent>
          <p>
            Welcome to Hamro Pasal! By accessing or using our platform, you agree to be bound by the terms and conditions set forth below. If you do not wish to be bound by these terms and conditions, you may not access or use the service. Hamro Pasal may modify this agreement at any time, and such modifications shall be effective immediately upon posting of the modified agreement.
          </p>
          <p>
            <strong>Use of the Site:</strong> You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our site.
          </p>
          <p>
            <strong>Privacy Policy:</strong> Your privacy is important to us. Our Privacy Policy is incorporated into these Terms and Conditions and explains how we collect, use, and protect your personal information.
          </p>
          <p>
            <strong>Intellectual Property:</strong> The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws and are owned by Hamro Pasal or its licensors. You agree not to copy, download, transmit, reproduce, print, or exploit for commercial purpose any material contained within the site without the express written consent of Hamro Pasal.
          </p>
          <p>
            <strong>Disclaimers:</strong> The site and the content and services made available on the site are provided "as is" and "as available" without any warranties of any kind. Hamro Pasal does not guarantee the accuracy, completeness, or timeliness of the content, information, and services provided on the site.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> Hamro Pasal will not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use or the inability to use the services or any content contained therein.
          </p>
          <p>
            <strong>Governing Law:</strong> These Terms and Conditions shall be governed by and construed in accordance with the laws of the country where Hamro Pasal operates, without giving effect to any principles of conflicts of law.
          </p>
          <p>
            We reserve the right to make changes to our site, policies, and these Terms and Conditions at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.
          </p>
        </TermsContent>
      </TermsContainer>
    </Center>
  );
};

export default TermsPage;
