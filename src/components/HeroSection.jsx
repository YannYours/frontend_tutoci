import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './components_css/HeroSection.css';
import student from '../assets/student.jpg';

export default function HeroSection() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (q.trim()) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge">La plateforme #1 d'apprentissage en Côte d'Ivoire</div>
              <h1 className="hero-title">
                Développez vos compétences avec <span className="hero-highlight"> tutoCI </span>
              </h1>
              <p className="hero-subtitle">
                Accédez à plus de 2000 tutoriels vidéo créés par des experts pour améliorer votre carrière professionnelle
              </p>
              
              <div className="hero-search-wrapper">
                <form className="hero-search-form" onSubmit={handleSearch}>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Que souhaitez-vous apprendre ?"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      <Search size={20} /> <span>Rechercher</span>
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Tutoriels</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Catégories</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">1K+</span>
                  <span className="stat-label">Étudiants</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 d-none d-lg-block">
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img
                  src={student}
                  alt="Étudiant"
                  className="img-fluid"
                />
              </div>
              <div className="hero-image-dots"></div>
              <div className="hero-image-circle"></div>
              <div className="hero-floating-card card-courses">
                <div className="card-icon">🎓</div>
                <div className="card-content">
                  <div className="card-title">+30</div>
                  <div className="card-subtitle">Nouveaux cours</div>
                </div>
              </div>
              <div className="hero-floating-card card-users">
                <div className="card-icon">👨‍💻</div>
                <div className="card-content">
                  <div className="card-title">98%</div>
                  <div className="card-subtitle">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
