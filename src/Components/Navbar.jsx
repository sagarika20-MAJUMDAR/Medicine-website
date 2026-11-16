import { logoImg } from '../data/contentData';

export default function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src={logoImg} alt="Caladrius Healthcare Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </div>
        <div>
          <button onClick={() => setCurrentPage('home')} style={btnStyle}>Home</button>
          <button onClick={() => setCurrentPage('about')} style={btnStyle}>About Us</button>
          <button onClick={() => setCurrentPage('contact')} style={btnStyle}>Contact</button>
          <button onClick={() => setCurrentPage('product')} style={btnStyle}>DIAGI-SURE®</button>
        </div>
      </div>
    </nav>
  );
}
const btnStyle = { background: 'none', border: 'none', marginLeft: '2rem', fontSize: '1rem', fontWeight: '500', color: '#334155', cursor: 'pointer' };