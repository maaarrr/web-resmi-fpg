import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import heroBg from '../assets/images/hero-bg.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section 
                className="hero-section" 
                style={{ 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay">
                    <h1>PT <span className="highlight">FACHRI</span> PROPERTY</h1>
                    <p className="hero-subtitle">BELI RUMAH HARUS FACHRI PROPERTI GROUP</p>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <h2>VISI KAMI</h2>
                    <div className="vision-content">
                        <div className="vision-image">
                            {/* Placeholder dengan gradient, nanti bisa diganti dengan gambar */}
                            <div style={{
                                color: 'white',
                                fontSize: '48px',
                                fontWeight: 'bold',
                                zIndex: 1
                            }}>
                                VISI
                            </div>
                        </div>
                        <div className="vision-text">
                            <h3>MEMBERI ARTI DAN TUJUAN</h3>
                            <p>Kami berkomitmen untuk memberikan solusi properti terbaik yang memberikan nilai dan makna bagi setiap keluarga Indonesia.</p>
                            <Link to="/about" className="btn-primary">TEMUKAN LEBIH</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="properties-section">
                <div className="container">
                    <h2>PROPERTI KAMI</h2>
                    <div className="properties-grid">
                        <div className="property-card">
                            <div className="property-overlay">
                                <h3>TEMUKAN DAN BANGUN HUNIAN MASA DEPAN ANDA</h3>
                                <Link to="/properties" className="btn-outline">TEMUKAN LEBIH</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-main">
                            <div className="contact-info-box">
                                <h3 className="company-name">FACHRI PROPERTY GROUP</h3>
                                <div className="contact-address">
                                    <h4>Alamat Perusahaan</h4>
                                    <p>Head Office: Oakwood Executive, Lantai 12-15</p>
                                    <p>Jl. Di. Panjaitan Kav. 2, RT.7/RW.11, Cipinang</p>
                                    <p>Kecamatan Jatinegara, Kota Jakarta Timur,</p>
                                    <p>Daerah Khusus Ibukota Jakarta 13340</p>
                                </div>
                                <div className="contact-details-box">
                                    <h4>Kontak</h4>
                                    <p>Telepon: (+6221) 2701005</p>
                                    <p>Fax: (+6221) 22085123</p>
                                    <p>Email: cs@fachrisaebaty.co.id</p>
                                </div>
                            </div>

                            <div className="contact-columns">
                                <div className="contact-column">
                                    <h4>Produk & Layanan</h4>
                                    <ul>
                                        <li>Pengembangan Properti</li>
                                        <li>Aset & Investasi Properti</li>
                                    </ul>
                                </div>
                                <div className="contact-column">
                                    <h4>Berita & Acara</h4>
                                    <ul>
                                        <li>Media</li>
                                        <li>Promo</li>
                                    </ul>
                                </div>
                                <div className="contact-column">
                                    <h4>Perusahaan</h4>
                                    <ul>
                                        <li><Link to="/about">Tentang Kami</Link></li>
                                        <li>Hubungi Kami</li>
                                        <li>Karir</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="contact-map-section">
                            <iframe 
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMzkuOSJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>Copyright © 2025 Fachri Property Group</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;