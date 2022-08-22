import React from 'react';
import styled from 'styled-components';
import FooterColumn from './FooterColumn';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    .copyright--footer {
      width: 100%;
    }

    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Links',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Links',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Links',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Links',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact info"
            links={[
              {
                title: '+21623859323',
                path: 'tel:23859323',
              },
              {
                title: 'adambenmessaoud2@gmail.com',
                path: 'mailto:adambenmessaoud2@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social links"
            links={[
              {
                title: 'Fiverr',
                path: 'https://www.fiverr.com/adam238?up_rollout=true',
              },
              {
                title: 'Github',
                path: 'https://github.com/AdamDjo',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="copyright--footer">
            <PText>
              ©2022 - Adam - React developper // Blockchain specialist
            </PText>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
