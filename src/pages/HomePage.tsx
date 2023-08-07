import  { useEffect, useState } from 'react';
import Profilephoto from '../assets/PHIDELIST.jpg';
import './HomePage.css';

export default function HomePage() {
  const [showH1, setShowH1] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowH1(true), 500);
    setTimeout(() => setShowP(true), 1500);
  }, []);

  return (
    <div className="home-container">
      <div className='content-home'>
        {showH1 && <h1>Hello,I'm Phidelist Oluoch Omuya</h1>}
        {showP && <p>I'm a Full-Stack Developer and a Cloud engineer</p>}
        <div className='btns'>
          <a href='https://github.com/PHIDELIST'>
            <button>GitHub</button>
            
          </a>
          <a href='https://delphiomuya.hashnode.dev'>
            <button>Blog</button>
          </a>
        </div>
      </div>
      <div className='profile-photo'>
       
      </div>
    </div>
  );
}
