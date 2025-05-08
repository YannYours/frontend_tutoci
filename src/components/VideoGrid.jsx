import React from 'react';
import VideoCard from './VideoCard';
import { ChevronRight } from 'lucide-react';
import './components_css/VideoGrid.css';

export default function VideoGrid({ videos = [], title }) {
  return (
    <section className="video-section">
      <div className="video-section-header">
        {title && (
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h2 className="section-title">{title}</h2>
            <a href="#" className="view-all-link">
              Voir tout <ChevronRight size={18} />
            </a>
          </div>
        )}
      </div>
      
      <div className="video-grid">
        <div className="row g-4">
          {videos.map(video => (
            <div key={video.id} className="col-sm-6 col-md-4 col-lg-3">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}