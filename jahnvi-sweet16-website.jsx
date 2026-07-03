import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar, Users, Camera, Music } from 'lucide-react';

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

  // Placeholder images - replace these URLs with real photos from photographer
  const galleryPhotos = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Photo ${i + 1}`,
    color: `hsl(${270 + i * 5}, ${65 - i % 3 * 10}%, ${55 + i % 3 * 8}%)`
  }));

  const performances = [
    { id: 1, title: 'Opening Dance', performer: 'Jahnvi & Friends', type: 'Bollywood' },
    { id: 2, title: 'Classical Performance', performer: 'Jahnvi', type: 'Bharatnatyam' },
    { id: 3, title: 'Group Ensemble', performer: '12 Dancers', type: 'Fusion' },
    { id: 4, title: 'Surprise Performance', performer: 'Family', type: 'Bollywood' },
    { id: 5, title: 'Solo Dance', performer: 'Jahnvi', type: 'Contemporary' },
    { id: 6, title: 'Group Performance', performer: 'Friends', type: 'Bollywood' },
    { id: 7, title: 'Classical Ensemble', performer: 'Dancers', type: 'Bharatnatyam' },
    { id: 8, title: 'Finale Performance', performer: 'All', type: 'Fusion' },
    { id: 9, title: 'Group Routine', performer: 'Friends', type: 'Bollywood' },
    { id: 10, title: 'Classical Solo', performer: 'Jahnvi', type: 'Bharatnatyam' },
    { id: 11, title: 'Energetic Bollywood', performer: 'Dancers', type: 'Bollywood' },
    { id: 12, title: 'Grand Finale', performer: 'All Performers', type: 'Fusion' }
  ];

  const speeches = [
    { id: 1, speaker: 'Father', title: 'Emotional Opening' },
    { id: 2, speaker: 'Mother', title: 'Heartfelt Words' },
    { id: 3, speaker: 'Aunt/Uncle', title: 'Family Wishes' },
    { id: 4, speaker: 'Close Friend', title: 'Friendship Tribute' },
    { id: 5, speaker: 'Grandparent', title: 'Wisdom & Blessings' },
    { id: 6, speaker: 'Brother/Sister', title: 'Sibling's Perspective' },
    { id: 7, speaker: 'Best Friend', title: 'Special Message' },
    { id: 8, speaker: 'Family Member', title: 'Celebratory Toast' }
  ];

  const timelineEvents = [
    { time: '6:00 PM', title: 'Guest Arrival', description: 'Guests gather for celebration' },
    { time: '6:30 PM', title: 'Avani & Nishit Entry', description: 'Grand entrance moment' },
    { time: '6:45 PM', title: 'Mahaksh & Jahnvi Entry', description: 'Jahnvi\'s star entrance' },
    { time: '7:00 PM', title: '12 Dance Performances', description: 'Spectacular performances begin' },
    { time: '8:00 PM', title: '8 Speeches', description: 'Heartfelt wishes & blessings' },
    { time: '8:45 PM', title: 'Nishit\'s Emotional Speech', description: 'Father\'s heartfelt tribute' },
    { time: '9:00 PM', title: 'Cake Cutting', description: 'Sweet celebration moment' },
    { time: '9:30 PM', title: 'Celebration Continues', description: 'Dancing & celebrations' }
  ];

  const testimonials = [
    { name: 'Friend 1', message: 'Most beautiful celebration ever!' },
    { name: 'Relative', message: 'Jahnvi looked absolutely stunning.' },
    { name: 'Guest', message: 'The performances were incredible!' },
    { name: 'Friend 2', message: 'A night we\'ll never forget.' },
    { name: 'Family Member', message: 'So much love and joy.' }
  ];

  const nextGallery = () => setActiveGalleryIndex((prev) => (prev + 1) % Math.ceil(galleryPhotos.length / 4));
  const prevGallery = () => setActiveGalleryIndex((prev) => (prev - 1 + Math.ceil(galleryPhotos.length / 4)) % Math.ceil(galleryPhotos.length / 4));
  const nextPerformance = () => setActivePerformanceIndex((prev) => (prev + 1) % performances.length);
  const prevPerformance = () => setActivePerformanceIndex((prev) => (prev - 1 + performances.length) % performances.length);

  return (
    <div className="w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          background: `radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)`
        }}></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(217, 119, 6, 0.05) 50%, rgba(139, 92, 246, 0.1) 100%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>

        {/* Video Placeholder */}
        <div className="relative w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center group">
          <div className="absolute inset-0 animate-pulse opacity-20" style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(217, 119, 6, 0.2) 50%, transparent 70%)`
          }}></div>
          
          <div className="relative text-center z-10 px-4">
            <div className="mb-8 inline-block">
              <Play className="w-24 h-24 text-amber-300" fill="currentColor" />
            </div>
            <h1 className="text-7xl font-black mb-4 bg-gradient-to-r from-amber-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Jahnvi's Sweet Sixteen
            </h1>
            <p className="text-2xl text-purple-200 font-light mb-2">June 28, 2026</p>
            <p className="text-xl text-purple-300">120 Guests • 12 Performances • 8 Speeches • Countless Memories</p>
            <p className="text-sm text-purple-400 mt-6 italic">Video placeholder - Your celebration video will appear here</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          By The Numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '120', label: 'Guests', icon: Users },
            { number: '200+', label: 'Photos', icon: Camera },
            { number: '12', label: 'Performances', icon: Music },
            { number: '8', label: 'Speeches', icon: Calendar }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-2xl p-8 border border-purple-500/30 text-center backdrop-blur-sm group-hover:border-amber-400/50 transition-all">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                  <div className="text-5xl font-black bg-gradient-to-r from-amber-200 to-pink-300 bg-clip-text text-transparent mb-2">{item.number}</div>
                  <div className="text-purple-200 text-lg">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          Event Timeline
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-amber-500"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2" />
                <div className="w-8 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-purple-900 relative z-10" />
                </div>
                <div className="w-1/2 px-8">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm hover:border-amber-400/50 transition-all">
                    <div className="text-2xl font-bold text-amber-300 mb-2">{event.time}</div>
                    <h3 className="text-xl font-bold mb-1 text-white">{event.title}</h3>
                    <p className="text-purple-300">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          Photo Gallery
        </h2>

        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.slice(activeGalleryIndex * 4, (activeGalleryIndex + 1) * 4).map((photo) => (
              <div key={photo.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                <div 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: photo.color }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white/50 text-center">
                    <div>
                      <Camera className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">{photo.title}</p>
                      <p className="text-xs text-gray-400">Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={prevGallery} className="p-3 rounded-full bg-purple-600 hover:bg-amber-500 transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2 items-center">
            {Array.from({ length: Math.ceil(galleryPhotos.length / 4) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveGalleryIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeGalleryIndex ? 'bg-amber-400 w-8' : 'bg-purple-500'}`}
              />
            ))}
          </div>
          <button onClick={nextGallery} className="p-3 rounded-full bg-purple-600 hover:bg-amber-500 transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* PERFORMANCES SHOWCASE */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          12 Dance Performances
        </h2>

        <div className="relative">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-2xl p-12 border border-purple-500/30 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="text-6xl font-black text-amber-300 mb-2">{activePerformanceIndex + 1}/12</div>
              <h3 className="text-3xl font-bold mb-2 text-white">{performances[activePerformanceIndex].title}</h3>
              <p className="text-lg text-purple-300">{performances[activePerformanceIndex].performer}</p>
              <p className="text-sm text-purple-400 mt-2">{performances[activePerformanceIndex].type}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevPerformance} className="p-3 rounded-full bg-purple-600 hover:bg-amber-500 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-1 items-center max-w-xl overflow-x-auto">
              {performances.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePerformanceIndex(i)}
                  className={`flex-shrink-0 h-2 rounded-full transition-all ${i === activePerformanceIndex ? 'bg-amber-400 w-8' : 'bg-purple-500 w-2'}`}
                />
              ))}
            </div>
            <button onClick={nextPerformance} className="p-3 rounded-full bg-purple-600 hover:bg-amber-500 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SPEECHES */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          8 Heartfelt Speeches
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speeches.map((speech) => (
            <div key={speech.id} className="group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -m-1" />
              <div className="relative bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm group-hover:border-amber-400/50 transition-all">
                <div className="text-2xl font-bold text-amber-300 mb-2">Speech {speech.id}</div>
                <div className="text-lg font-semibold text-white mb-1">{speech.speaker}</div>
                <div className="text-purple-300">{speech.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-purple-600/30 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-2 text-white">Nishit's Emotional Speech</h3>
          <p className="text-center text-purple-200 italic">A father's heartfelt tribute to his beloved daughter</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
          Guest Messages
        </h2>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-2xl p-12 border border-purple-500/30 backdrop-blur-sm">
          <p className="text-2xl text-white italic text-center mb-8">"{testimonials[activeTestimonial].message}"</p>
          <p className="text-center text-amber-300 font-semibold">{testimonials[activeTestimonial].name}</p>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === activeTestimonial ? 'bg-amber-400 w-8' : 'bg-purple-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* THANK YOU SECTION */}
      <section className="relative py-32 px-4 md:px-8 flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          background: `radial-gradient(ellipse at center, rgba(217, 119, 6, 0.4) 0%, transparent 70%)`
        }}></div>

        <div className="relative text-center z-10 max-w-2xl">
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-amber-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
            Thank You
          </h2>
          <p className="text-2xl text-purple-200 mb-8">
            For being part of Jahnvi's special day
          </p>
          <p className="text-lg text-purple-300 mb-12">
            120 guests, 200+ photos, 12 performances, and countless beautiful moments
          </p>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-amber-500/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <p className="text-purple-200 mb-2">Sweet memories that last forever</p>
            <p className="text-sm text-purple-400">June 28, 2026 • Fremont, California</p>
          </div>

          <p className="text-sm text-purple-400 mt-12 italic">
            [Meaningful quote placeholder - Your custom message will appear here]
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-500/20 py-8 px-4 text-center text-purple-400">
        <p>Made with love for Jahnvi • 2026</p>
      </footer>
    </div>
  );
};

export default JahnviSweetSixteen;
