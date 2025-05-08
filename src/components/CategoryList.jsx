import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Palette,
  Calculator,
  MessageCircle,
  Briefcase,
  FlaskRound as Flask
} from 'lucide-react';

import { categories } from '../data/videos';
import './components_css/CategoryList.css';

export default function CategoryList() {
  // iconName est directement une string dans videoData.js
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code size={24} />;
      case 'palette':
        return <Palette size={24} />;
      case 'calculator':
        return <Calculator size={24} />;
      case 'message-circle':
        return <MessageCircle size={24} />;
      case 'briefcase':
        return <Briefcase size={24} />;
      case 'flask':
        return <Flask size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  return (
    <div className="category-list">
      <div className="category-section-header">
        <div className="category-section-subtitle">EXPLOREZ</div>
        <h2 className="category-section-title">Parcourez nos catégories</h2>
        <p className="category-section-description">
          Découvrez notre large sélection de tutoriels dans des domaines variés pour développer vos compétences professionnelles et personnelles.
        </p>
      </div>
      <div className="row g-3">
        {categories.map((category) => (
          <div key={category.id} className="col-6 col-md-4 col-lg-2">
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              className="category-item text-center text-decoration-none"
            >
              <div className="category-icon mb-2">
                {/* passe category.icon (string) au lieu de category.icon.iconName */}
                {getIconComponent(category.icon)}
              </div>
              <span className="category-name">{category.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

