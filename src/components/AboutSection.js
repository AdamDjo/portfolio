import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .AboutSection__left,
  .AboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .AboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .AboutSection__left {
      flex: 4;
    }
    .AboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0rem 0 10rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .AboutSection__left,
    .AboutSection__right {
      width: 100%;
    }
    .AboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .AboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 70%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="AboutSection__left">
          <SectionTitle
            subheading="let me introduce my self"
            heading=" About me"
          />
          <PText>
            I'm building Websites from scratch. Also i can help on your minting
            page or custom Smart contract on Solana, Ethereum, Polygon...
          </PText>
          <div className="AboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" outline="" />
            <Button btnLink="/about" btnText="Read More" />
          </div>
        </div>
        <div className="AboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
