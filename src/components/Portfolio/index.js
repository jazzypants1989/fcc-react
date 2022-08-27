import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  console.log(portfolioData);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
        clearTimeout(timeoutId)
    }
  }, [])

const renderPortfolio = (portfolio) => {
  return (
    <div className='images-container'>
      {
        portfolio.map((item, index) => {
          return (
            <div className='image-container' key={index}>
              <img src={item.cover} alt={item.title} className ="portfolio-image"/>
              <div className='content'>
                <p className='title'><AnimatedLetters
                  letterClass={letterClass}
                  strArray={[item.title]}
                  idx={0}
                  /></p>
                  <h4 className='description'>{item.description}</h4>
                  <button
                    className='btn'
                    onClick={() => window.open(item.url)}>View</button>
              </div>
            </div>
          )
        } 
        )
    }
    </div>
  )
}
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
        {renderPortfolio(portfolioData.portfolio)}
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Portfolio;