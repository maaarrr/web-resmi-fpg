import React from 'react';
// import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Wujudkan Investasi Properti Terbaik Anda</h1>
          <p>Pengembang properti terpercaya dengan berbagai pilihan hunian berkualitas</p>
          <a href="/property" className="btn-primary">Lihat Property</a>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon">🏘️</div>
              <h3>Lokasi Strategis</h3>
              <p>Properti di lokasi premium dengan akses mudah</p>
            </div>
            <div className="feature-card">
              <div className="icon">💎</div>
              <h3>Kualitas Terbaik</h3>
              <p>Material berkualitas tinggi dan desain modern</p>
            </div>
            <div className="feature-card">
              <div className="icon">💰</div>
              <h3>Harga Terjangkau</h3>
              <p>Sistem pembayaran fleksibel dan kompetitif</p>
            </div>
            <div className="feature-card">
              <div className="icon">✅</div>
              <h3>Legal Aman</h3>
              <p>Sertifikat lengkap dan terjamin</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;