import React from 'react';
import styled from 'styled-components';
import { MdLocalPhone, MdEmail } from 'react-icons/md';

import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .ContactSection__wrapper {
    display: block;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  @media only screen and (max-width: 1024px) {
    .ContactSection__wrapper::after {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .ContactSection__wrapper {
      flex-direction: column;
    }

    .left {
      max-width: 100%;
    }
    .right {
      max-width: 100%;
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;
export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch" />
        <div className="ContactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdEmail />}
              text="adambenmessaoud2@gmail.com"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
