import './ServicesPage.css'
function ServicesPage(){
    return(
        <>
        <div className='services-container'>
        <div className='intro-services'>
            <h1>What I do?</h1>
            <p>The Services I offer:</p>
            <span>With a focus on delivering top-notch solutions, I offer a range of services that cater to diverse needs, including web development, cloud solutions, systems design, and more.</span>
        </div>
        
        <div className='cards-services'>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>Full-Stack Web Development:</h4>
                        <p>With proficiency in the SERN stack (SQL, Express, React, Node.js),I craft dynamic web applications that deliver exceptional user experiences. From front-end design to back-end development, I build robust and responsive web solutions.</p>
                    </div>
                </div>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>Cloud Solutions Architecture:</h4>
                        <p>As an AWS Certified Solutions Architect with knowledge of Azure, I can design and implement innovative cloud solutions tailored to your specific needs. From infrastructure setup to scalability and cost optimization, 
                            I ensure your applications and services run efficiently and securely in the cloud.</p>
                    </div>
                </div>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>DevOps and CI/CD:</h4>
                        <p>Leveraging my strong background in DevOps practices, I can streamline your development workflows and automate deployment processes. 
                            Continuous integration and delivery practices ensure faster releases and higher software quality.</p>
                    </div>
                </div>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>Cost Optimization Strategies:</h4>
                        <p>With a focus on cost efficiency, I implement strategies to optimize your cloud infrastructure spend. 
                            By analyzing usage patterns and leveraging cost-effective services, I help you get the most value from your cloud investment.</p>
                    </div>
                </div>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>Security and Compliance:</h4>
                        <p>Security is a top priority, and I incorporate industry best practices to protect your data and applications. From identity and access management to encryption and compliance, I ensure your systems are secure and compliant</p>
                    </div>
                </div>
                <div className="card-services">
                    <div className="card__content-services">
                        <h4>Application Modernization:</h4>
                        <p>I can help modernize your legacy applications, migrating them to cloud-native architectures for improved scalability, maintainability, and cost-effectiveness.</p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default ServicesPage;