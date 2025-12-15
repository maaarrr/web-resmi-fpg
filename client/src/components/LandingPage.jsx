import React from 'react';
import './LandingPage.css';
import heroBgsatu from '../assets/images/homesatu.png';
import heroBgdua from '../assets/images/homedua.png';
import heroBgtiga from '../assets/images/hometiga.png';
import heroBgempat from '../assets/images/homeempat.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section 
                className="hero-section" 
                style={{ 
                    backgroundImage: `url(${heroBgsatu})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay">
                    <h1>PT <span className="highlight">FACHRI</span> PROPERTY</h1>
                    <p className="hero-subtitle">BELI RUMAH HARUS FACHRI PROPERTI GROUP</p>
                </div>
            </section>

<<<<<<< HEAD
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
=======
            <section
                className="hero-section" 
                style={{ 
                    backgroundImage: `url(${heroBgdua})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay">
                    <h1>VISI KAMI</h1>
                    <p className="hero-subtitle">MEMBERI ARTI DAN TUJUAN</p>
                    <button className="btn-outline">TEMUKAN LEBIH</button>
>>>>>>> 5ebe391634f13a137900ec38ee2091691a94a5d7
                </div>
            </section>

            <section
                className="hero-section" 
                style={{ 
                    backgroundImage: `url(${heroBgtiga})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay">
                    <h1>PROPERTI KAMI</h1>
                    <p className="hero-subtitle">TEMUKAN DAN BANGUN HUNIAN MASA DEPAN ANDA</p>
                    <button className="btn-outline">TEMUKAN LEBIH</button>
                </div>
            </section>

            <section
                className="hero-section" 
                style={{ 
                    backgroundImage: `url(${heroBgempat})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-overlay">
                    <h1>HUBUNGI KAMI</h1>
                    <p className="hero-subtitle">KAMI MEMBANGUN MIMPI</p>
                    <button className="btn-outline">TEMUKAN LEBIH</button>
                </div>
            </section>



            <section className="contact-section">
                <div className="container">
<<<<<<< HEAD
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
=======
                    <h2>GET IN TOUCH WITH US</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-logo-container">
                                <div className="logo-box"></div>
                                <h3>FACHRI PROPERTY GROUP</h3>
                            </div>
                            <div className="address">
                                <h4>Alamat Perusahaan</h4>
                                <p>Panasonic Tower Lantai 16-G</p>
                                <p>Jl. DR. Pengabean Km. 2, RT.7/RW.1, Gambir, Campaka</p>
                                <p>Kecamatan Ciputat Utara, Kota Tangerang Selatan, Banten</p>
                                <p>Indonesia 15340</p>
                            </div>
                            <div className="contact-details">
                                <h4>Kontak</h4>
                                <p>Phone: (+6221) 23581300, 21201301</p>
                                <p>Fax: (+6221) 23581302</p>
                                <p>Email: cs@fachrisaebaty.co.id</p>
>>>>>>> 5ebe391634f13a137900ec38ee2091691a94a5d7
                            </div>
                        </div>

                        <div className="contact-map-section">
                            <iframe 
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTEnMzkuOSJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                                width="100%"
<<<<<<< HEAD
                                height="100%"
=======
                                height="400"
>>>>>>> 5ebe391634f13a137900ec38ee2091691a94a5d7
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
<<<<<<< HEAD
                    
=======
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
                                <li>Tata Kelola Perusahaan</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Keberlanjutan</h4>
                            <ul>
                                <li>Laporan CSR</li>
                                <li>Aktivitas CSR</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Produk & Layanan</h4>
                            <ul>
                                <li>WMA Realty Archipelago</li>
                                <li>Pengembangan Properti</li>
                                <li>Asset & Investasi Properti</li>
                                <li>Hotel</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Berita & Acara</h4>
                            <ul>
                                <li>Media</li>
                                <li>E-Magazine</li>
                                <li>Promo</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Perusahaan</h4>
                            <ul>
                                <li>Tentang Kami</li>
                                <li>Sertifikat & Penghargaan</li>
                                <li>Karir</li>
                                <li>Hubungi Kami</li>
                            </ul>
                        </div>
                    </div>
>>>>>>> 5ebe391634f13a137900ec38ee2091691a94a5d7
                    <div className="footer-bottom">
                        <p>Copyright © 2025 Fachri Property Group</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;