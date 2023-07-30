import './CertificationPage.css'
import SAA from '../assets/SAA.png'
import SAAbadge from '../assets/SAA-badge.png'
import CPP from '../assets/cloudpract-cert.png'
import CPPbadge from '../assets/CPP-badge.png'
import Azure from '../assets/Azure.png'
import Azurebadge from '../assets/azurebadge.png'
import Jitu from '../assets/fullstack.png'
function CertificationPage() {
    return (
        <div className="CertificationPage-container">
            <div className='cert-text'>
            <h1>Certifications</h1>
            <p>Continuously enhancing my skills and knowledge, these certifications represent my commitment to excellence and passion for staying at the forefront of my field</p>
            </div>
            <div className='cards-certs'>
                    <div className="card-container-certs">
                        <div className="card-certs">
                            <div className="front-content">
                                <img src={SAAbadge} alt="" />
                            </div>
                            <div className="content-certs">
                                <img src={SAA} alt="" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="card-container-certs">
                        <div className="card-certs">
                            <div className="front-content">
                           <img src={Jitu} alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="card-container-certs">
                        <div className="card-certs">
                            <div className="front-content">
                           <img src={Azurebadge} alt="" />
                            </div>
                            <div className="content-certs">
                            <img src={Azure} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card-container-certs">
                        <div className="card-certs">
                            <div className="front-content">
                                <img src={CPPbadge} alt="" />
                            </div>
                            <div className="content-certs">
                                <img src={CPP} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      
    )

}
export default CertificationPage;