import { useNavigate } from 'react-router';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='column' style={{ alignItems: 'center' }}>
      <h3 style={{ fontSize: '3rem', height: 0 }}>Hello Aneesh Pissay,</h3>
      <p style={{ fontSize: '2rem', height: 30 }}>what would you like to do?</p>
      <div className='row'>
        <div className="column tile" onClick={() => navigate("/host")}>
          <span className="material-symbols-outlined tile-icon">video_call</span>
          Start a Meeting
        </div>
        <div className="vertical-divider"></div>
        <div className="column tile" onClick={() => navigate("/join")}>
          <span className="material-symbols-outlined tile-icon">person_add</span>
          Join a meeting
        </div>
        <div className="vertical-divider"></div>
        <div className="column tile">
          <span className="material-symbols-outlined tile-icon">calendar_add_on</span>
          Start a Meeting
        </div>
      </div>
    </div>
  )
}

export default Home