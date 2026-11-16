import { useRef, useState, useEffect } from 'react';
import { siteData } from '../data/contentData';

import slideImg1 from '../assets/Images/Caladrius Healthcare FB Cover Photo 3.png';
import slideImg2 from '../assets/Images/Caladrius Healthcare FB Cover Photo.png';
import slideImg3 from '../assets/Images/Caladrius Healthcare FB Cover Photo.png'; 

const heroSlides = [
  {
    bgImage: slideImg1,
    tagline: siteData.company.tagline,
    title: 'Happy Stomach.\nHappy You.',
    subtitle: siteData.company.mission,
  },
  {
    bgImage: slideImg2,
    tagline: 'Nurturing Health, Enriching Lives.',
    title: 'Quality Is Not Just Our Standard,\nIt Is Our Promise.',
    subtitle: 'We manufacture products with highest possible standards in our state-of-the-art facility.',
  },
  {
    bgImage: slideImg3,
    tagline: 'Ayurvedic Goodness. Modern Wellness.',
    title: 'Complete Relief From Common\nDigestive Discomforts',
    subtitle: 'Embrace digestive harmony. Live life lighter with 100% natural and safe ingredients.',
  },
];


export default function Home({ setCurrentPage }) {
  const videoSliderRef = useRef(null);
  const photoSliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো-স্লাইড টাইমার (প্রতি ৪ সেকেন্ড পর পর আরও স্মুথলি চেঞ্জ হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4000); 

    return () => clearInterval(timer);
  }, []);

  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 374;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <div>
      {/* Dynamic Background & Content Hero Section with Smooth Transition */}
      <div 
        key={currentSlide} // key ব্যবহার করার ফলে স্লাইড বদলালে চমৎকার ফেইড-ইন অ্যানিমেশন কাজ করবে
        className="hero-banner" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(2, 44, 34, 0.88), rgba(4, 120, 87, 0.78)), url(${activeSlide.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'fadeInSlide 1s ease-in-out'
        }}
      >
        <div className="hero-badge">{activeSlide.tagline}</div>
        <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>{activeSlide.title}</h1>
        <p className="hero-subtitle">{activeSlide.subtitle}</p>
        <button onClick={() => setCurrentPage('product')} className="hero-btn">
          Explore Product &rarr;
        </button>
      </div>

      {/* ইনলাইন সিএসএস অ্যানিমেশন স্টাইল */}
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0.4;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="container">
        {/* Videos Slider Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#022c22' }}>Featured Videos & Media ({siteData.mediaGallery.videos.length})</h2>
            <div>
              <button onClick={() => scrollSlider(videoSliderRef, 'left')} style={sliderBtnStyle}>&larr;</button>
              <button onClick={() => scrollSlider(videoSliderRef, 'right')} style={{ ...sliderBtnStyle, marginLeft: '0.5rem' }}>&rarr;</button>
            </div>
          </div>
          <div ref={videoSliderRef} className="slider-container">
            {siteData.mediaGallery.videos.map(vid => (
              <div key={vid.id} className="card slider-card">
                <video width="100%" controls style={{ borderRadius: '0.5rem', display: 'block', backgroundColor: '#000' }}>
                  <source src={vid.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h4 style={{ marginTop: '1rem', color: '#064e3b', textAlign: 'center', fontSize: '1rem' }}>{vid.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Slider Section */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#022c22' }}>Brand Gallery ({siteData.mediaGallery.photos.length})</h2>
            <div>
              <button onClick={() => scrollSlider(photoSliderRef, 'left')} style={sliderBtnStyle}>&larr;</button>
              <button onClick={() => scrollSlider(photoSliderRef, 'right')} style={{ ...sliderBtnStyle, marginLeft: '0.5rem' }}>&rarr;</button>
            </div>
          </div>
          <div ref={photoSliderRef} className="slider-container">
            {siteData.mediaGallery.photos.map(photo => (
              <div 
                key={photo.id} 
                className="card slider-card" 
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => setSelectedImage(photo)}
              >
                <img src={photo.src} alt={photo.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                <h4 style={{ marginTop: '1rem', color: '#064e3b', fontSize: '1rem' }}>{photo.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕ Close</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3 style={{ color: 'white', marginTop: '1rem' }}>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

const sliderBtnStyle = {
  background: '#047857',
  color: 'white',
  border: 'none',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  fontSize: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};