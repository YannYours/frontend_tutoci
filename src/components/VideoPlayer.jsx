import React from 'react';
import './components_css/VideoPlayer.css';

export default function VideoPlayer({ video }) {
  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <iframe
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
          className="video-iframe"
        />
      </div>
      <div className="video-info">
        <h1 className="video-title">{video.title}</h1>
        <div className="video-meta">
          <span className="instructor">Par {video.instructor}</span>
          <span className="views">{video.views.toLocaleString()} vues</span>
          <span className="upload-date">Publié le {video.uploadDate}</span>
          <span className="category">{video.category}</span>
        </div>
        <div className="video-description mt-4">
          <h5>Description</h5>
          <p>{video.description}</p>
        </div>
      </div>
    </div>
  );
}
