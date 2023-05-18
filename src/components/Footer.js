import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
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
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
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
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Shaun Murphy</h1>
          <PText>
          As a full-stack developer and graduate of the University of Minnesota coding bootcamp, I have honed my skills in both front-end and back-end development. I am passionate about developing innovative solutions, working collaboratively with teams, and delivering high-quality work. Let's connect and bring your project to the next level!
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+7068178522',
                path: 'tel:7068178522',
              },
              {
                title: 'sdmurphy861@gmail.com',
                path: 'mailto:sdmurphy861@gmail.com',
              },
              {
                title: 'South Georgia',
                path: 'https://www.google.com/maps/place/Southwest+Georgia,+GA/@31.3428107,-84.969406,9z/data=!3m1!4b1!4m6!3m5!1s0x88ed710603a88f81:0xdd8fac386573dfdb!8m2!3d31.3254159!4d-84.4382721!16s%2Fm%2F02rpd8w',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Git Hub',
                path: 'https://github.com/BaldOracle',
              },
              {
                title: 'Linked IN',
                path: 'https://www.linkedin.com/in/shaun-murphy-752029b3/',
              },
              
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2023 - Shaun Murphy |
           
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
