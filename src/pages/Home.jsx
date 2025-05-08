import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoryList from '../components/CategoryList';
import VideoGrid from '../components/VideoGrid';
import Footer from '../components/Footer';
import {
    getFeaturedVideos,
    getVideosByCategory
} from '../data/videos';

export default function Home() {
    // Préparer les listes de vidéos
    const featuredVideos = getFeaturedVideos();
    const programmationVideos = getVideosByCategory('Programmation');
    const designVideos = getVideosByCategory('Design');

    return (
        <>
            <Header />
            <HeroSection />

            <div className="container py-5">
                <CategoryList />

                {/* Grilles de vidéos */}
                <VideoGrid videos={featuredVideos} title="Tutoriels populaires" />
                <VideoGrid videos={programmationVideos} title="Programmation" />
                <VideoGrid videos={designVideos} title="Design" />
            </div>
            <Footer />
        </>
    );
}
