import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Generate array of image paths (1-56)
  const images = Array.from({ length: 56 }, (_, i) => ({
    id: i + 1,
    src: new URL(`../assets/images/gallery/${i + 1}.jpeg`, import.meta.url)
      .href,
    alt: `Kyokushin Karate Training ${i + 1}`,
  }));

  // Generate array of video paths (1-5)
  const videos = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    src: new URL(`../assets/videos/${i + 1}.mp4`, import.meta.url).href,
    title: `Training Video ${i + 1}`,
  }));

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }
    setCurrentImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Capturing moments of dedication, discipline, and excellence in
            Kyokushin Karate
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm">
              🥋 {images.length} Photos
            </span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-bold text-sm">
              🎥 {videos.length} Videos
            </span>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === "images"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            📸 Images ({images.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            🎥 Videos ({videos.length})
          </button>
        </div>

        {/* Images Grid */}
        {activeTab === "images" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 border-gray-200 hover:border-blue-600"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      Photo #{image.id}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-video bg-black">
                  <video controls className="w-full h-full" preload="metadata">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                      🥋 Kyokushin
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white font-bold text-lg">
                Photo #{currentImage.id}
              </p>
              <p className="text-gray-300 text-sm">{currentImage.alt}</p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold">
            {currentImage.id} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
