import { Link, NavLink } from 'react-router-dom';
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

const Sidebar = () =>   (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="jazzypants" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#8b33ff" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color= "#8b33ff" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#8b33ff" />
            </NavLink>
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
    </div>
)
export default Sidebar;