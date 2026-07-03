import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Sparkles, Heart } from 'lucide-react';

const JahnviSweetSixteen = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activePerformanceIndex, setActivePerformanceIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryPhotos = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Memory ${i + 1}`,
    gradient: `linear-gradient(135deg, hsl(${270 + i * 8}, 70%, 50%), hsl(${300 + i * 6}, 65%, 45%))`,
  }));

  const performances = [
    { id: 1, title: 'Opening Dance', performer: 'Jahnvi & Friends', type: '🎭 Bollywood' },
    { id: 2, title: 'Classical Performance', performer: 'Jahnvi', type: '🪔 Bharatnatyam' },
    { id: 3, title: 'Group Ensemble', performer: '12 Dancers', type: '✨ Fusion' },
    { id: 4, title: 'Surprise Performance', performer: 'Family', type: '🎭 Bollywood' },
    { id: 5, title: 'Solo Dance', performer: 'Jahnvi', type: '💃 Contemporary' },
    { id: 6, title: 'Group Performance', performer: 'Friends', type: '🎭 Bollywood' },
    { id: 7, title: 'Classical Ensemble', performer: 'Dancers', type: '🪔 Bharatnatyam' },
    { id: 8, title: 'Finale Performance', performer: 'All', type: '✨ Fusion' },
    { id: 9, title: 'Group Routine', performer: 'Friends', type: '🎭 Bollywood' },
    { id: 10, title: 'Classical Solo', performer: 'Jahnvi', type: '🪔 Bharatnatyam' },
    { id: 11, title: 'Energetic Bollywood', performer: 'Dancers', type: '🎭 Bollywood' },
    { id: 12, title: 'Grand Finale', performer: 'All Performers', type: '✨ Fusion' }
  ];

  const timelineEvents = [
    { time: '6:00 PM', title: 'Guest Arrival', emoji: '🎉' },
    { time: '6:30 PM', title: 'Avani & Nishit Entry', emoji: '👑' },
    { time: '6:45 PM', title: 'Mahaksh & Jahnvi Entry', emoji: '⭐' },
    { time: '7:00 PM', title: '12 Dance Performances', emoji: '💃' },
    { time: '8:00 PM', title: '8 Heartfelt Speeches', emoji: '💬' },
    { time: '8:45 PM', title: "Father's Emotional Speech", emoji: '❤️' },
    { time: '9:00 PM', title: 'Cake Cutting', emoji: '🎂' },
    { time: '9:30 PM', title: 'Celebration Continues', emoji: '✨' }
  ];

  const testimonials = [
    { name: 'Family Member', message: '✨ Most beautiful celebration we\'ve ever witnessed.' },
    { name: 'Guest', message: '💫 Jahnvi looked absolutely stunning and radiant.' },
    { name: 'Friend', message: '🎭 The performances were incredibly talented and moving.' },
    { name: 'Relative', message: '❤️ A night filled with so much love and joy.' },
    { name: 'Guest', message: '👑 The elegance and warmth was unforgettable.' }
  ];

  const stats = [
    { number: '120', label: 'Guests', emoji: '👥' },
    { number: '200+', label: 'Photos', emoji: '📸' },
    { number: '12', label: 'Performances', emoji: '💃' },
    { number: '8', label: 'Speeches', emoji: '💬' }
  ];

  const nextGallery = () => setActiveGalleryIndex((prev) => (prev + 1) % Math.ceil(galleryPhotos.length / 4));
  const prevGallery = () => setActiveGalleryIndex((prev) => (prev - 1 + Math.ceil(galleryPhotos.length / 4)) % Math.ceil(galleryPhotos.length / 4));
  const nextPerformance = () => setActivePerformanceIndex((prev) => (prev + 1) % performances.length);
  const prevPerformance = () => setActivePerformanceIndex((prev) => (prev - 1 + performances.length) % performances.length);

  return (
    <div className="w-full bg-purple-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 md:px-8 animate-slideIn">
          {/* Play button */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full blur-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-purple-600 p-1 rounded-full">
                <div className="bg-purple-950 rounded-full p-6 group cursor-pointer hover:scale-105 transition-transform">
                  <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" fill="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-playfair font-black mb-6 leading-tight">
            <span className="gradient-text">Jahnvi's</span>
            <br />
            <span className="gradient-text">Sweet Sixteen</span>
          </h1>

          {/* Date and details */}
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-amber-300 font-light">June 28, 2026</p>
            <p className="text-lg text-purple-200">Fremont, California</p>
            <p className="text-purple-300 text-sm md:text-base">120 Guests • 12 Performances • 8 Speeches • Countless Memories</p>
          </div>

          {/* CTA Button */}
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 inline-block">
            Explore the Celebration ↓
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-amber-300">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 text-center">
                  <div className="text-4xl mb-2">{stat.emoji}</div>
                  <div className="text-5xl font-playfair font-black text-amber-300 mb-2">{stat.number}</div>
                  <div className="text-purple-200 text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            Event Timeline
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-purple-600 to-amber-500"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div key={i} className={`flex gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="w-1/2">
                    <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 h-full">
                      <div className="text-2xl mb-2">{event.emoji}</div>
                      <div className="text-2xl font-playfair font-bold text-amber-300 mb-2">{event.time}</div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-8 flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-purple-500 border-4 border-purple-950 relative z-10 shadow-lg shadow-amber-500/50"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            Photo Gallery
          </h2>

          {/* Gallery Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryPhotos.slice(activeGalleryIndex * 4, (activeGalleryIndex + 1) * 4).map((photo) => (
                <div key={photo.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                  <div
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: photo.gradient, backgroundSize: 'cover' }}
                  >
                    <div className="w-full h-full bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📸</div>
                        <p className="text-white text-sm">{photo.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevGallery}
              className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(galleryPhotos.length / 4) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryIndex(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === activeGalleryIndex ? 'bg-amber-400 w-8' : 'bg-purple-600 w-3'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextGallery}
              className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* PERFORMANCES */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            12 Dance Performances
          </h2>

          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-12 mb-12">
            <div className="text-center space-y-6">
              <div>
                <div className="text-7xl font-playfair font-black bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
                  {activePerformanceIndex + 1}/12
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-playfair font-bold mb-2 text-white">
                  {performances[activePerformanceIndex].title}
                </h3>
                <p className="text-lg text-amber-300 mb-2">{performances[activePerformanceIndex].performer}</p>
                <p className="text-purple-300">{performances[activePerformanceIndex].type}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPerformance}
              className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-1 max-w-2xl overflow-x-auto">
              {performances.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePerformanceIndex(i)}
                  className={`flex-shrink-0 h-2 rounded-full transition-all ${
                    i === activePerformanceIndex ? 'bg-amber-400 w-8' : 'bg-purple-600 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPerformance}
              className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            Guest Messages
          </h2>

          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-12 mb-12">
            <div className="text-center space-y-6">
              <Heart className="w-12 h-12 mx-auto text-amber-400" />
              <p className="text-2xl md:text-3xl text-white italic font-light leading-relaxed">
                "{testimonials[activeTestimonial].message}"
              </p>
              <p className="text-lg text-amber-300">— {testimonials[activeTestimonial].name}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-3 rounded-full transition-all ${
                  i === activeTestimonial ? 'bg-amber-400 w-8' : 'bg-purple-600 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* THANK YOU SECTION */}
      <section className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-amber-900/20"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl animate-slideIn">
          <Sparkles className="w-16 h-16 mx-auto mb-8 text-amber-400 animate-pulse" />

          <h2 className="text-6xl md:text-8xl font-playfair font-black mb-8 gradient-text">
            Thank You
          </h2>

          <p className="text-2xl md:text-3xl text-purple-200 mb-6 font-light">
            For being part of Jahnvi's magical day
          </p>

          <p className="text-lg text-purple-300 mb-12 leading-relaxed">
            120 guests, 200+ photographs, 12 unforgettable performances, and 8 heartfelt speeches
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl mb-12">
            <p className="text-purple-200 mb-4">
              [Your meaningful quote will appear here]
            </p>
            <p className="text-sm text-purple-400 italic">
              ~ With love and gratitude
            </p>
          </div>

          <p className="text-sm text-purple-400">
            ✨ June 28, 2026 • Fremont, California ✨
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-700/30 py-8 px-4 text-center text-purple-400">
        <p>Made with ❤️ for Jahnvi • 2026</p>
      </footer>
    </div>
  );
};

export default JahnviSweetSixteen;
