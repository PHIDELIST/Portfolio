import './MainPage.css'
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ServicesPage from './ServicesPage';
import SkillsPage from './SkillsPage';
import EducationPage from './EducationPage';
import CertificationPage from './CertificationPage';
import ContactPage from './ContactPage';
function MainPage(){
    return(
        <>
     <HomePage />
     <AboutMePage />
     <ServicesPage />
     <SkillsPage />
     <EducationPage />
     <CertificationPage />
     <ContactPage />
    
        </>
    )
}
export default MainPage;