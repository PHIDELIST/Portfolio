import './SkillsPage.css';

export default function SkillsPage() {
  return (
    <div className='skills-container'>
      <div className='experience'>
      <h1>My Skills:</h1>
        <p>
          I am a well-founded Software Developer with expertise in web development, web deployment, JavaScript, ReactJS, NodeJS, Express, GUI creation, and DevOps practices.
        </p>
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='card__content'>
            <h4>Software Development</h4>
            <li>React</li>
            <li>JavaScript</li> 
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>ExpressJs</li>
            <li>NodeJs</li>
            
          </div>
        </div>
        <div className='card'>
          <div className='card__content'>
            <h4>Cloud Computing</h4>
            <li>AWS</li>
            <li>Azure</li>
            
          </div>
        </div>
        <div className='card'>
          <div className='card__content'>
            <h4>DevOps</h4>
            <li>Docker</li>
            <li>Infrastructure as Code</li>
            <li>Git</li>
            <li>Application instrumentation and observability</li>
            <li>Automated Testing</li>
           
          </div>
        </div>
        <div className='card'>
          <div className='card__content'>
            <h4>Database Creation and Management</h4>
            <li>MSSQL</li>
            <li>MySQL</li>
            <li>Postgres SQL</li>
            
          </div>
        </div>
      </div>
    </div>
  );
}
