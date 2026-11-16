import { siteData } from '../data/contentData';

export default function About() {
  const pillars = [
    { title: "Ayurvedic Heritage", desc: "Formulations inspired by time-tested traditional wisdom combined with modern science.", icon: "🌿" },
    { title: "Rigorous Quality", desc: "Strict quality control protocols enforced across every batch of manufacturing.", icon: "🛡️" },
    { title: "Family Wellness", desc: "Dedicated to making healthcare accessible and affordable for every household.", icon: "💚" }
  ];

  return (
    <div className="container" style={{ maxWidth: '1000px' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ background: '#ecfdf5', color: '#047857', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
          About Our Company
        </span>
        <h1 style={{ fontSize: '3rem', color: '#022c22', margin: '1rem 0' }}>Empowering Everyday Wellness</h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
          {siteData.company.mission}
        </p>
      </div>

      {/* Main Story Card */}
      <div className="card" style={{ marginBottom: '3rem', borderLeft: '5px solid #047857' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#022c22', marginBottom: '1rem' }}>Our Core Philosophy</h3>
        <p style={{ lineHeight: '1.8', color: '#334155', marginBottom: '1rem' }}>
          At <strong>{siteData.company.name}</strong>, we are committed to improving everyday wellness through high-quality healthcare and wellness products inspired by trusted formulations and modern manufacturing standards.
        </p>
        <p style={{ lineHeight: '1.8', color: '#334155' }}>
          We focus on developing products that support digestive health, nutritional well-being, and overall quality of life. Driven by innovation, integrity, and a passion for wellness, Caladrius Healthcare continuously strives to deliver products that customers can trust.
        </p>
      </div>

      {/* Pillars Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {pillars.map((pillar, idx) => (
          <div key={idx} className="card" style={{ textAlign: 'center', transition: 'transform 0.3s ease' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{pillar.icon}</div>
            <h4 style={{ color: '#064e3b', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{pillar.title}</h4>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div style={{ background: '#022c22', color: 'white', borderRadius: '1rem', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#34d399' }}>100%</div>
          <div style={{ fontSize: '0.9rem', color: '#ccfbf1', marginTop: '0.5rem' }}>Natural Ingredients</div>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#34d399' }}>FSSAI</div>
          <div style={{ fontSize: '0.9rem', color: '#ccfbf1', marginTop: '0.5rem' }}>Approved Quality Standards</div>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#34d399' }}>India</div>
          <div style={{ fontSize: '0.9rem', color: '#ccfbf1', marginTop: '0.5rem' }}>Country of Origin</div>
        </div>
      </div>
    </div>
  );
}