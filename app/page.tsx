"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Clock,
  Grid3X3,
  Info,
  Zap,
} from "lucide-react";

interface Photo {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  likes: number;
  ethPrice: number;
  timeLeft: string;
  image: string;
}

const mockPhotos: Photo[] = [
  {
    id: 1,
    title: "DYLAN_LEE_001",
    author: "CyberArtist",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1247,
    ethPrice: 2.5,
    timeLeft: "2h 34m",
    image: "/dylan.png",
  },
  {
    id: 2,
    title: "MARCUS_001",
    author: "MetaCreator",
    authorAvatar: "/placeholder-user.jpg",
    likes: 892,
    ethPrice: 1.8,
    timeLeft: "5h 12m",
    image: "/marcus.png",
  },
  {
    id: 3,
    title: "RASMUS_001",
    author: "NeonMaster",
    authorAvatar: "/placeholder-user.jpg",
    likes: 2156,
    ethPrice: 3.2,
    timeLeft: "1h 45m",
    image: "/rasmus.png",
  },
  {
    id: 4,
    title: "ROJO_001",
    author: "VoidWalker",
    authorAvatar: "/placeholder-user.jpg",
    likes: 1634,
    ethPrice: 4.1,
    timeLeft: "3h 28m",
    image: "/rojo.png",
  },
];

export default function CyberpunkGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showMiniGallery, setShowMiniGallery] = useState(false);
  const [liked, setLiked] = useState(false);

  const currentPhoto = mockPhotos[currentIndex];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % mockPhotos.length);
    setLiked(false);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mockPhotos.length) % mockPhotos.length
    );
    setLiked(false);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative h-screen max-w-xl mx-auto bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentPhoto.image})`,
          filter: "brightness(0.7) contrast(1.2)",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-transparent to-gray-800/20" />

      {/* Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Title - Vertical Left Side */}
      <div className="absolute top-1/2 transform z-10">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 tracking-[0.3em] leading-[1.2] font-mono whitespace-nowrap -rotate-90 origin-center [text-shadow:0_0_30px_rgba(255,255,255,0.8),_0_0_60px_rgba(255,255,255,0.4)]">
          {currentPhoto.title}
        </h1>
      </div>

      {/* Top Info Panel */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-start justify-end">
          {/* Author Info */}
          <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-md rounded-2xl p-3 border border-gray-500/30">
            <img
              src={currentPhoto.authorAvatar || "/placeholder.svg"}
              alt={currentPhoto.author}
              className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-lg shadow-gray-300/50"
            />
            <div>
              <p
                className="text-white font-bold text-sm"
                style={{ fontFamily: "monospace" }}
              >
                {currentPhoto.author}
              </p>
              <div className="flex items-center space-x-1">
                <Heart
                  className={`w-4 h-4 ${
                    liked ? "text-white fill-white" : "text-gray-400"
                  } cursor-pointer transition-all duration-300`}
                  onClick={toggleLike}
                />
                <span
                  className="text-gray-300 text-xs font-bold"
                  style={{ fontFamily: "monospace" }}
                >
                  {currentPhoto.likes + (liked ? 1 : 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Auction Info */}
        <div className="mt-6 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-2xl p-4 border border-gray-400/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-white animate-pulse" />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "monospace" }}
              >
                {currentPhoto.ethPrice} ETH
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-300 animate-pulse" />
              <span
                className="text-gray-300 font-bold"
                style={{ fontFamily: "monospace" }}
              >
                {currentPhoto.timeLeft}
              </span>
            </div>
          </div>
          {/* <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden"> */}
          {/* <div
              className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full animate-pulse"
              style={{ width: "60%" }}
            /> */}
          {/* </div> */}
        </div>
      </div>

      {/* Gaming Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevPhoto}
            className="group relative w-16 h-16 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-full border border-gray-400/30 shadow-lg shadow-gray-400/30 hover:shadow-gray-300/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8 text-white mx-auto group-hover:text-gray-200 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Center Controls */}
          <div className="flex space-x-4">
            {/* Details Button */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="group relative w-12 h-12 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-full border border-gray-400/30 shadow-lg shadow-gray-400/30 hover:shadow-gray-300/50 transition-all duration-300 hover:scale-110"
            >
              <Info className="w-6 h-6 text-white mx-auto group-hover:text-gray-200 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mini Gallery Button */}
            <button
              onClick={() => setShowMiniGallery(!showMiniGallery)}
              className="group relative w-12 h-12 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-full border border-gray-400/30 shadow-lg shadow-gray-400/30 hover:shadow-gray-300/50 transition-all duration-300 hover:scale-110"
            >
              <Grid3X3 className="w-6 h-6 text-white mx-auto group-hover:text-gray-200 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={nextPhoto}
            className="group relative w-16 h-16 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-md rounded-full border border-gray-400/30 shadow-lg shadow-gray-400/30 hover:shadow-gray-300/50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-8 h-8 text-white mx-auto group-hover:text-gray-200 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Details Panel */}
      {showDetails && (
        <div className="absolute bottom-32 left-4 right-4 z-30 bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-gray-400/30 transform transition-all duration-500">
          <h3
            className="text-white font-bold text-lg mb-4"
            style={{ fontFamily: "monospace" }}
          >
            ASSET DETAILS
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Token ID:</span>
              <span className="text-white font-mono">
                #{currentPhoto.id.toString().padStart(6, "0")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Collection:</span>
              <span className="text-gray-300 font-mono">CYBER_GALLERY_V1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rarity:</span>
              <span className="text-gray-200 font-mono">LEGENDARY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Blockchain:</span>
              <span className="text-gray-400 font-mono">ETHEREUM</span>
            </div>
          </div>
        </div>
      )}

      {/* Mini Gallery */}
      {showMiniGallery && (
        <div className="absolute bottom-32 left-4 right-4 z-30 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-gray-400/30">
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {mockPhotos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowMiniGallery(false);
                }}
                className={`flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-white shadow-lg shadow-white/50"
                    : "border-gray-600 hover:border-gray-400"
                }`}
              >
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2">
          {mockPhotos.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-8 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-b from-white to-gray-400 shadow-lg shadow-white/50"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gray-400/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-300/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
