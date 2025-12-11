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
                    <h2>VISIT KAMI</h2>
                    <div className="vision-content">
                        <div className="vision-image">
                            {/* Sementara kosong atau tambahkan placeholder */}
                        </div>
                        <div className="vision-text">
                            <h3>MEMBERI ARTI DAN TUJUAN</h3>
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
                    <h2>HUBUNGI KAMI</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>FACHRI PROPERTY GROUP</h3>
                            <div className="address">
                                <h4>Alamat Perusahaan</h4>
                                <p>Head Office: Oakwood Executive, Lantai 12-15</p>
                                <p>Jakarta Timur 13340</p>
                            </div>
                            <div className="contact-details">
                                <h4>Kontak</h4>
                                <p>Phone: +62(21) 2701005</p>
                                <p>Email: cs@fachrisaebaty.co.id</p>
                            </div>
                        </div>
                        <div className="contact-map">
                            <iframe 
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMzkuOSJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <h4>Relasi Investor</h4>
                            <ul>
                                <li>Laporan Tahunan</li>
                                <li>Laporan Keuangan</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Keberlanjutan</h4>
                            <ul>
                                <li>Aktivitas CSR</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Produk & Layanan</h4>
                            <ul>
                                <li>Pengembangan Properti</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Berita & Acara</h4>
                            <ul>
                                <li>Media</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Perusahaan</h4>
                            <ul>
                                <li>Tentang kami</li>
                                <li>Hubungi Kami</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>Copyright © 2025 Fachri Property Group</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;