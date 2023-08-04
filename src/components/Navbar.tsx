import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import {useState} from 'react'

function Navbar() {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
<div className='nav-items'>
    <div className='logo' onClick={scrollToTop}>PHIDELIST OLUOCH OMUYA</div>
        <div className={`burger ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
    <ul className={`nav-list ${showLinks ? 'active' : ''}`}>
        <li>
          <ScrollLink to='home' spy={true} smooth={true} offset={0} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' spy={true} smooth={true} offset={0} duration={500}>About me</ScrollLink>
        </li>
        <li>
          <ScrollLink to='services' spy={true} smooth={true} offset={0} duration={500}>Services</ScrollLink>
        </li>
        <li>
          <ScrollLink to='skills' spy={true} smooth={true} offset={0} duration={500}>Skills</ScrollLink>
        </li>
        <li>
          <ScrollLink to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</ScrollLink>
        </li>
        <li>
          <ScrollLink to='education' spy={true} smooth={true} offset={0} duration={500}>Education</ScrollLink>
        </li>
        <li>
          <ScrollLink to='certification' spy={true} smooth={true} offset={0} duration={500}>Certification</ScrollLink>
        </li>
        <li>
          <ScrollLink to='contact' spy={true} smooth={true} offset={0} duration={500}>Contact</ScrollLink>
        </li>
    </ul>
    </div>
  );
}

export default Navbar;
