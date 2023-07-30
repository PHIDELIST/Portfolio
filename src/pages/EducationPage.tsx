import  { useState } from 'react';
import './EducationPage.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function EducationPage() {
  const [showUniversityDetails, setShowUniversityDetails] = useState(false);
  const [showSecondaryDetails, setShowSecondaryDetails] = useState(false);
  const [showPrimaryDetails, setShowPrimaryDetails] = useState(false);

  const toggleUniversityDetails = () => {
    setShowUniversityDetails((prevState) => !prevState);
  };

  const toggleSecondaryDetails = () => {
    setShowSecondaryDetails((prevState) => !prevState);
  };

  const togglePrimaryDetails = () => {
    setShowPrimaryDetails((prevState) => !prevState);
  };

  return (
    <>
      <div className="education-container">
        <h1>Education</h1>
        <div className="university">
          <h1>
            University Education{' '}
            <span className="toggle-icon" onClick={toggleUniversityDetails}>
              {showUniversityDetails ? <FaMinus /> : <FaPlus />}
            </span>
          </h1>
          {showUniversityDetails && (
            <>
              <p>Kirinyaga University</p>
              <p>Bachelor's degree, Computer systems engineering : Aug 2019 - Apr 2023</p>
            </>
          )}
        </div>
        <div className="secondary">
          <h1>
            Secondary School Education{' '}
            <span className="toggle-icon" onClick={toggleSecondaryDetails}>
              {showSecondaryDetails ? <FaMinus /> : <FaPlus />}
            </span>
          </h1>
          {showSecondaryDetails && (
            <>
              <p>RAMBA HIGH SCHOOL</p>
              <p>Kenya Certificate of Secondary Education : Feb 2015 - Nov 2018</p>
              <span>Grade: B (Plain)</span>
            </>
          )}
        </div>
        <div className="Primary">
          <h1>
            Primary School Education{' '}
            <span className="toggle-icon" onClick={togglePrimaryDetails}>
              {showPrimaryDetails ? <FaMinus /> : <FaPlus />}
            </span>
          </h1>
          {showPrimaryDetails && (
            <>
              <p>LUORO PRIMARY SCHOOL</p>
              <p>Kenya Certificate of Primary Education </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
