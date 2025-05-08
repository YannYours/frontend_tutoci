import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { videos } from '../data/videos'; 
import VideoGrid from '../components/VideoGrid';
import { ChevronRight, Search as SearchIcon } from 'lucide-react';
import './pages_css/SearchPage.css';
import Header from '../components/Header';


export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  // Filtre les vidéos selon la requête
  const searchResults = videos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.description.toLowerCase().includes(query.toLowerCase()) ||
    video.category.toLowerCase().includes(query.toLowerCase()) ||
    video.instructor.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
    <Header />
      <div className="search-page">
        <div className="container py-4">
          {/* Fil */}
          <div className="breadcrumb-nav mb-4">
            <Link to="/" className="breadcrumb-item">
              Accueil
            </Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span className="breadcrumb-item active">Recherche</span>
          </div>

          {/* Sous en-tête page Recherche */}
          <div className="search-header mb-4">
            <h1 className="search-title">
              <SearchIcon size={24} className="me-2" />
              Résultats pour &laquo;{query}&raquo;
            </h1>
            <p className="search-meta">{searchResults.length} tutoriels trouvés</p>
          </div>

          {/* Résultats ou message d’absence */}
          {searchResults.length > 0 ? (
            <VideoGrid videos={searchResults} />
          ) : (
            <div className="no-results text-center py-5">
              <h2>Aucun résultat trouvé</h2>
              <p>Nous n'avons pas trouvé de tutoriels correspondant à votre recherche.</p>
              <div className="search-suggestions text-start mx-auto" style={{ maxWidth: 400 }}>
                <h4>Suggestions :</h4>
                <ul>
                  <li>Vérifiez l'orthographe des termes de recherche.</li>
                  <li>Essayez des mots-clés différents ou plus généraux.</li>
                  <li>Explorez nos catégories pour trouver des tutoriels similaires.</li>
                </ul>
              </div>
              <Link to="/" className="btn btn-primary mt-3">
                Retour à l'accueil
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
