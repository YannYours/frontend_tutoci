import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye } from 'lucide-react';
import './components_css/VideoCard.css';

const VideoCard = ({ video }) => {
  function formatViews  (views)  {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return views.toString();
    }
  };

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`} className="card-link">
        <div className="card-thumbnail">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="img-fluid"
          />
          <div className="play-overlay">
            <span className="play-icon">
              <Play size={36} />
            </span>
          </div>
          <span className="duration">
            <Clock size={14} className="me-1" />
            {video.duration}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{video.title}</h5>
          <p className="card-instructor">{video.instructor}</p>
          <div className="card-meta">
            <span className="meta-item">
              <Eye size={14} className="me-1" />
              {formatViews(video.views)} vues
            </span>
            <span className="category-badge">{video.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
