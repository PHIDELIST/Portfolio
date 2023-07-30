import './SkillsPage.css'
export default function SkillsPage() {
  return (
    <div className='skills-container'>
        <h1>My Skills:</h1>
        <div className='experience'>
                <p>
                I am well founded Software Developer with expertise in web development,web deployment,Javascript,ReactJS, NodeJS, Express, GUI creation and Devops practices.
                </p>
            </div>
        <div className='cards'>
            <div className="card">
                <div className="card__content">
                    <h4>Software Developemnt</h4>
                </div>
            </div>
            <div className="card">
                <div className="card__content">
                    <h4>Cloud Computing</h4>
                </div>
            </div>
            <div className="card">
                <div className="card__content">
                    <h4>DevOps</h4>
                </div>
            </div>
            <div className="card">
                <div className="card__content">
                    <h4>Systems Design</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
