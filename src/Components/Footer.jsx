import { logoImg } from '../data/contentData';

export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{ background: '#022c22', color: '#ccfbf1', padding: '3rem 1.5rem', marginTop: 'auto', borderTop: '2px solid #047857' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'center' }}>
        <div>
          <div style={{ background: '#f9f5e7', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', display: 'inline-block', marginBottom: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <img src={logoImg} alt="Caladrius Healthcare Logo" style={{ height: '35px', objectFit: 'contain', display: 'block' }} />
          </div>
          <p style={{ fontSize: '0.9rem', color: '#34d399', maxWidth: '300px' }}>Making preventive healthcare accessible, effective, and affordable for every family.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: '#fff' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><button onClick={() => setCurrentPage('home')} style={footerBtn}>Home</button></li>
            <li><button onClick={() => setCurrentPage('about')} style={footerBtn}>About Us</button></li>
            <li><button onClick={() => setCurrentPage('product')} style={footerBtn}>DIAGI-SURE®</button></li>
            <li><button onClick={() => setCurrentPage('contact')} style={footerBtn}>Contact Us</button></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: '#fff' }}>Compliance</h4>
          <p style={{ fontSize: '0.9rem', color: '#34d399' }}>Country of Origin: India</p>
        </div>
      </div>
    </footer>
  );
}

const footerBtn = { background: 'none', border: 'none', color: '#34d399', cursor: 'pointer', padding: 0, textAlign: 'left' };