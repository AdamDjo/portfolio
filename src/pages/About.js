import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/data/CV.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100% !important;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .download-btn {
    a {
      font-size: 2.2rem;
      background-color: black;
      padding: 0.7rem 2rem;
      border-radius: 8px;
      display: inline-block;
      border: 2px solid var(--gray-1);
      color: white !important;
      cursor: pointer;
    }
    a:hover {
      background-color: white;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info__items {
      margin-top: 5rem;
    }
  }
`;
export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              <span> Hi, i'm Adam</span>
            </p>
            <h2 className="about__heading">
              A frontend developper & blockchain consultant
            </h2>
            <div className="about__info">
              <PText>
                Lorem Lorem lorem lorem lorem <br />
              </PText>
            </div>
            <div className="download-btn">
              <a href={Resume} download="myCV">
                <b>Download CV</b>
              </a>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="adam" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Varsity"
              items={[
                'BAC +5 : Master degree E-Commerce, IHEC Carthage',
                'BAC +3 : Licence degree Science of computing',
              ]}
            />
            <AboutInfoItem title="School" items={['BAC computing']} />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'Javascript', 'REACT']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Node', 'MongoDB', 'Redux']}
            />
            <AboutInfoItem
              title="Dev Blockchain"
              items={['Metaplex', 'Solidity']}
            />
            <AboutInfoItem
              title="Smart Contract"
              items={['ERC20', 'ERC721', 'ERC1155', 'Solana']}
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem title="2020-2022" items={['Metaplex', 'Solidity']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
