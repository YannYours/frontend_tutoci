import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVideosByCategory } from '../data/videos';
import VideoGrid from '../components/VideoGrid';
import { ChevronRight } from 'lucide-react';
import './pages_css/CategoryPage.css';
import Header from '../components/Header';

export default function CategoryPage() {
  const { categoryName } = useParams();

  // Met en majuscule la première lettre du paramètre d’URL
  const formatCategoryName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const formattedCategoryName = categoryName
    ? formatCategoryName(categoryName)
    : '';

  // Récupère les vidéos correspondant à la catégorie
  const videos = getVideosByCategory(formattedCategoryName);

  return (
    <>
    <Header />
      <div className="category-page">
        <div className="container py-4">
          {/* Fil */}
          <nav className="breadcrumb-nav mb-4">
            <Link to="/" className="breadcrumb-item">
              Accueil
            </Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span className="breadcrumb-item active">
              {formattedCategoryName}
            </span>
          </nav>

          {/* Sous en-tête de la page */}
          <header className="category-header mb-4">
            <h1 className="category-title">{formattedCategoryName}</h1>
            <p className="category-description">
              Explorez notre collection de tutoriels sur{' '}
              {formattedCategoryName.toLowerCase()}{' '}
              pour améliorer vos compétences et élargir vos connaissances.
            </p>
          </header>

          {/* Affiche la grille ou un message si vide */}
          {videos.length > 0 ? (
            <VideoGrid videos={videos} />
          ) : (
            <div className="no-videos text-center py-5">
              <p>Aucune vidéo n’est disponible dans cette catégorie pour le moment.</p>
              <Link to="/" className="btn btn-primary">
                Retour à l’accueil
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
