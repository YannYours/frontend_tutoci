import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVideoById, videos } from '../data/videos';
import VideoPlayer from '../components/VideoPlayer';
import RelatedVideos from '../components/RelatedVideos';
import { ChevronRight } from 'lucide-react';
import './pages_css/VideoDetailPage.css';
import Header from '../components/Header';

export default function VideoDetailPage() {
  const { id } = useParams();
  const video = getVideoById(id);

  if (!video) {
    return (
      <div className="container py-5 text-center">
        <h2>Vidéo non trouvée</h2>
        <p>La vidéo que vous recherchez n'existe pas ou a été supprimée.</p>
        <Link to="/" className="btn btn-primary mt-3">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="video-detail-page">
        <div className="container py-4">
          {/* Fil  */}
          <div className="breadcrumb-nav mb-4">
            <Link to="/" className="breadcrumb-item">
              Accueil
            </Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <Link
              to={`/category/${video.category.toLowerCase()}`}
              className="breadcrumb-item"
            >
              {video.category}
            </Link>
            <ChevronRight size={16} className="breadcrumb-separator" />
            <span className="breadcrumb-item active">{video.title}</span>
          </div>

          {/* Contenu principal */}
          <div className="row">
            <div className="col-lg-8">
              <VideoPlayer video={video} />
            </div>
            <div className="col-lg-4">
              <RelatedVideos videos={videos} currentVideoId={video.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
