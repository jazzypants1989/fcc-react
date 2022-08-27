import { Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    faBandcamp
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope, faUser, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="jazzypants" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
                exact="true" 
                activeClassName="active" 
                to="/"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color= "#8b33ff" />
            </NavLink>
            <NavLink  
            activeClassName="active" 
            className="about-link" 
            to="/about"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color= "#8b33ff" />
            </NavLink>
            <NavLink 
                activeClassName="active" 
                className="portfolio-link" 
                to="/portfolio"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color= "#8b33ff" />
            </NavLink>
            <NavLink 
                activeClassName="active" 
                className="contact-link" 
                to="/contact"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color= "#8b33ff" />
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color= "#8b33ff"
                size="3x"
                className="close-icon" />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/jpence1989/'>
                    <FontAwesomeIcon icon={faLinkedin} color='8b33ff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/jazzypants1989/'>
                    <FontAwesomeIcon icon={faGithub} color='8b33ff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.twitter.com/JessePence5/'>
                    <FontAwesomeIcon icon={faTwitter} color='8b33ff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/jazzypants420/'>
                    <FontAwesomeIcon icon={faInstagram} color='8b33ff' />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://jessepence.bandcamp.com'>
                    <FontAwesomeIcon icon={faBandcamp} color='8b33ff' />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars} 
        color='8b33ff' 
        size="3x" 
        className="yummy-burger" />
    </div>
    )
}

export default Sidebar;