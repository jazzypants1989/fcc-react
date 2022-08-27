import React, { useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  console.log(portfolioData);

  return (
    <>
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Portfolio'.split('')}
          idx={15}
          />
      </h1>
      <div>
        {/* {renderPortfolio()} */}
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Portfolio;