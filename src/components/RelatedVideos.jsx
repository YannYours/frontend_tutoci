import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import './components_css/RelatedVideos.css';

export default function RelatedVideos({ videos, currentVideoId }) {
  // Filtrer la vidéo actuelle et obtenir jusqu'à 4 vidéos connexes
  const relatedVideos = videos
    .filter(video => video.id !== currentVideoId)
    .slice(0, 4);

  return (
    <div className="related-videos">
      <h3 className="related-title">Vidéos recommandées</h3>
      <div className="related-list">
        {relatedVideos.map(video => (
          <Link
            to={`/video/${video.id}`}
            className="related-item"
            key={video.id}
          >
            <div className="related-thumbnail">
              <img src={video.thumbnailUrl} alt={video.title} />
              <span className="play-icon">
                <Play size={20} />
              </span>
              <span className="duration">
                <Clock size={12} className="me-1" />
                {video.duration}
              </span>
            </div>
            <div className="related-info">
              <h5 className="related-video-title">{video.title}</h5>
              <p className="related-instructor">{video.instructor}</p>
              <span className="related-category">{video.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
