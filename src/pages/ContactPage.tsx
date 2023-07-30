import { useState } from 'react';
import './ContactPage.css';
import { FaEnvelope, FaPhone ,FaPaperPlane} from 'react-icons/fa';

export default function ContactPage() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');


  const emailTo = 'phidelisoluoch@gmail.com';

  return (
    <div className="contact-container">
      <h1>Connect With Me:</h1>
      <div className="contact-content">
        <div className="icons">
          <h3>Satisfied with me? Please contact me</h3>
          <span>
            <FaPhone size={40} />  +254743251846
          </span>
          <span>
            <FaEnvelope size={40}/>  phidelisoluoch@gmail.com
          </span>
        </div>
        <form action={`mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} method="POST" className="email-form">
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <input type="text" name="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
          <textarea name="message" cols={30} rows={10} placeholder="Your Message" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
          <button type="submit" className="submit-btn">
            <FaPaperPlane size={25}/>
          </button>
        </form>
      </div>
    </div>
  );
}
