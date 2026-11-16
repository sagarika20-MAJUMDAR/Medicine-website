import { siteData } from '../data/contentData';

export default function ProductDetail() {
  const composition = [
    { name: "Fennel (Foeniculum vulgare)", qty: "125 mg" },
    { name: "Cumin (Cuminum cyminum)", qty: "100 mg" },
    { name: "Ajwain (Trachyspermum ammi)", qty: "100 mg" },
    { name: "Dried Ginger Powder (Zingiber officinale)", qty: "100 mg" },
    { name: "Cardamom (Elettaria cardamomum)", qty: "50 mg" },
    { name: "Amla (Phyllanthus emblica)", qty: "50 mg" },
    { name: "Haritaki (Terminalia chebula)", qty: "50 mg" },
    { name: "Bahera (Terminalia bellirica)", qty: "50 mg" },
    { name: "Cinnamon (Cinnamomum verum)", qty: "50 mg" },
    { name: "Fenugreek (Trigonella foenum-graecum)", qty: "50 mg" },
    { name: "Clove (Syzygium aromaticum)", qty: "25 mg" },
    { name: "Black Pepper (Piper nigrum)", qty: "25 mg" },
    { name: "Aloe Vera Juice (Aloe barbadensis Miller)", qty: "1 mL" },
    { name: "Peppermint Oil (Mentha × piperita)", qty: "7.5 mg" },
    { name: "Menthol", qty: "3.75 mg" }
  ];

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <span style={{ color: '#047857', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' }}>Flagship Product Profile</span>
          <h1 style={{ fontSize: '2.5rem', color: '#022c22', margin: '0.2rem 0 1rem' }}>{siteData.product.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: '500', marginBottom: '1rem' }}>{siteData.product.category}</p>
          <p style={{ color: '#334155', lineHeight: '1.6' }}>{siteData.product.description}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <img src={siteData.product.image} alt="DIAGI-SURE" style={{ maxHeight: '280px', objectFit: 'contain' }} />
        </div>
      </div>
      <div className="card">
        <h3 style={{ fontSize: '1.5rem', color: '#022c22', marginBottom: '1rem' }}>Composition (Each 10 mL contains)[cite: 2, 3]</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {composition.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', background: '#f8fafc', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <span style={{ fontWeight: '500', color: '#1e293b' }}>{item.name}</span>
              <span style={{ color: '#047857', fontWeight: '600' }}>{item.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}