import './ServicesPage.css'
function ServicesPage(){
    return(
        <>
        <div className='services-container'>
        <div className='intro-services'>
            <h1>What I do?</h1>
            <p>The Services I offer:</p>
        </div>
        
        <div className='cards'>
                <div className="card">
                    <div className="card__content">
                        <h4>Software Development</h4>
                        <p>With need for faster and user friendly software i deliver this with much ease with implementation using Javascript,React, CSSand HTML</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__content">
                        <h4>Cloud Adoption </h4>
                        <p>I help Businesses in cloud adoption by ensuring they smoothly by they full adopt be cloud best practices</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__content">
                        <h4>Cloud Migration</h4>
                        <p>I help in decoupling a monolithic application and migrate it to cloud either</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__content">
                        <h4>Innovative Ideas</h4>
                        <p>You have an idea and need light shed on it?I intergrate my client's ideas to fit their imagination with satisfaction</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default ServicesPage;