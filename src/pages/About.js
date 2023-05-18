import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/me.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

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
      max-width: 100%;
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
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Shaun Murphy</span>
              </p>
              <h2 className="about__heading">A full Stack developer</h2>
              <div className="about__info">
                <PText>


                  I'm originally from Newark, New Jersey, but now I call Georgia home. Over the years, I've had the opportunity to live in various parts of Georgia, exploring its diverse landscapes. I'm happily married and proud to be a father of two. Settling down in a small town was something I never imagined, but it has brought unexpected joys and a strong sense of community to my life.
                  <br /> <br />
                  With an innate curiosity for understanding how things work, I've always enjoyed tinkering and exploring. During my pursuit of a bachelor's degree in mathematics, I had the opportunity to delve into computer science courses, which ignited a deep fascination for coding. Despite my successful management career spanning over a decade, my secret passion for coding has remained alive. Now, I'm thrilled to have the chance to fully immerse myself in the world of programming and turn my passion into a fulfilling profession. 

                  <br />
                  <br />
                  As a developer, my drive to improve is constant. I embrace a growth mindset, always seeking to expand my knowledge and skills. I am passionate about exploring new technologies, driven by the desire to simplify processes and maximize efficiency. My ultimate goal is to have fun while crafting innovative solutions that empower individuals to discover and unleash their full potential.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Greene County High School, Georgia']}
              />
              <AboutInfoItem
                title="College"
                items={['Valdosta State University']}
              />
              <AboutInfoItem
                title="BootCamp"
                items={['University Of Minnesota']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MySQL', 'NoSQL']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma', 'Procreate']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
