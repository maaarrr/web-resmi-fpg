import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('vision');

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-overlay">
                    <h1>TENTANG KAMI</h1>
                    <p>PT <span className="highlight">FACHRI</span> PROPERTY GROUP</p>
                </div>
            </section>

            <section className="about-tabs">
                <div className="container">
                    <div className="tabs-header">
                        <button 
                            className={activeTab === 'vision' ? 'tab active' : 'tab'}
                            onClick={() => setActiveTab('vision')}
                        >
                            Vision
                        </button>
                        <button 
                            className={activeTab === 'mission' ? 'tab active' : 'tab'}
                            onClick={() => setActiveTab('mission')}
                        >
                            Mision
                        </button>
                        <button 
                            className={activeTab === 'history' ? 'tab active' : 'tab'}
                            onClick={() => setActiveTab('history')}
                        >
                            Sejarah Perusahaan
                        </button>
                    </div>

                    <div className="tabs-content">
                        {activeTab === 'vision' && (
                            <div className="tab-panel">
                                <h2>Visi Kami</h2>
                                <p>Menjadi perusahaan properti terkemuka yang memberikan solusi hunian berkualitas tinggi untuk masyarakat Indonesia.</p>
                            </div>
                        )}
                        {activeTab === 'mission' && (
                            <div className="tab-panel">
                                <h2>Misi Kami</h2>
                                <ul>
                                    <li>Mengembangkan properti berkualitas dengan harga terjangkau</li>
                                    <li>Memberikan pelayanan terbaik kepada pelanggan</li>
                                    <li>Berinovasi dalam pengembangan properti</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'history' && (
                            <div className="tab-panel">
                                <h2>Sejarah Perusahaan</h2>
                                <p>PT Fachri Property Group didirikan dengan komitmen untuk menyediakan hunian berkualitas bagi masyarakat Indonesia.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;