import './MainPage.css'
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ServicesPage from './ServicesPage';
import SkillsPage from './SkillsPage';
import EducationPage from './EducationPage';
import CertificationPage from './CertificationPage';
import ContactPage from './ContactPage';
function MainPage() {
    return (
      <div className='main-page'>
        <div className='section' id='home'>
          <HomePage />
        </div>
        <div className='section' id='about'>
          <AboutMePage />
        </div>
        <div className='section' id='services'>
          <ServicesPage />
        </div>
        <div className='section' id='skills'>
          <SkillsPage />
        </div>
        <div className='section' id='education'>
          <EducationPage />
        </div>
        <div className='section' id='certification'>
          <CertificationPage />
        </div>
        <div className='section' id='contact'>
          <ContactPage />
        </div>
      </div>
    );
  }
  
  export default MainPage;
  