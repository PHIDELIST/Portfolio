import Profilephoto from '../assets/PHIDELIST.jpg'
import './HomePage.css'
export default function HomePage() {
  return (
    <>
    <div className="home-container">
        <div className='content'>
            <h1>Hello,I'm Phidelist Oluoch Omuya</h1>
            <p>I'm a Full-Stack Developer and a Cloud engineer</p>
            <div className='btns'>
              <button>Skills</button>
              <button>Projects</button>
            </div>
        </div>
        <div className='profile-photo'>
            <img src={Profilephoto} alt="Profilephoto" />
        </div>
    </div>
    </>
  )
}
