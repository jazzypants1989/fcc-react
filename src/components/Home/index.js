import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'J', 'a', 'z', 'z', 'y', ' ', 'P', 'a', 'n', 't']
    const jobArray = ['J', 'o', 'v', 'i', 'a', 'l', ' ', 'P', 'e', 'n', 'g', 'u', 'i', 'n', ' ', 'LLC.']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
      }, [])
    
    return (
        <>
        <div className = 'container home-page'>
            <div className = 'text-zone'>
                <h1>
                    <span className = {letterClass}> H</span>
                    <span className = {`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className = {`${letterClass} _13`}>I</span>
                    <span className = {`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <img src={LogoTitle} alt='Developer Logo'/>,<br /> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26} /></h1>
                <h2>I'm a full-stack web developer and a musician.</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home;