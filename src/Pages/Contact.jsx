import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#064e3b', marginBottom: '1rem' }}>Contact & Inquiries</h1>
      <p style={{ color: '#475569', marginBottom: '2rem' }}>
        Get in touch with Caladrius Healthcare for product inquiries, distribution opportunities, or customer support.
      </p>

      {submitted ? (
        <div className="card" style={{ textAlign: 'center', background: '#ecfdf5', borderColor: '#a7f3d0' }}>
          <h3 style={{ color: '#064e3b', marginBottom: '0.5rem' }}>Thank You!</h3>
          <p style={{ color: '#047857' }}>Your message has been successfully sent. We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#1e293b' }}>Full Name</label>
            <input type="text" required placeholder="Enter your full name" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#1e293b' }}>Email Address</label>
            <input type="email" required placeholder="name@example.com" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#1e293b' }}>Message / Inquiry</label>
            <textarea rows="4" required placeholder="How can we help you?" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" style={{ background: '#047857', color: 'white', fontWeight: 'bold', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #cbd5e1',
  fontSize: '1rem',
  outline: 'none'
};