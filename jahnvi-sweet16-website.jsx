import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Play } from 'lucide-react';

const JahnviSweetSixteen = () => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activePerformanceIndex, setActivePerformanceIndex] = useState(0);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Journey photos - Childhood to 16
  const journeyPhotos = [
    { id: 1, title: 'Early Years', image: 'https://drive.google.com/uc?export=view&id=1CggcofhgDAA1sqeZ08qLnti-tj0uKkju' },
    { id: 2, title: 'Growing Up', image: 'https://drive.google.com/uc?export=view&id=1SQaEnFqxElsab5Hxxtv0054iisJnWwC1' },
    { id: 3, title: 'Artistic Journey', image: 'https://drive.google.com/uc?export=view&id=1ACkj4Zt6nAzoAkjg4LJ_nZUTLW3OV4vu' },
    { id: 4, title: 'Strength & Grace', image: 'https://drive.google.com/uc?export=view&id=1Zw7eFCOUnOmDfzepbqe1stxFDIjSZKPk' },
    { id: 5, title: 'Blossoming', image: 'https://drive.google.com/uc?export=view&id=1-F9VW2mE2BsAF-rK9iXUXCstMfICXDVS' },
    { id: 6, title: 'Teen Years', image: 'https://drive.google.com/uc?export=view&id=157_zv5QKJOpc0NffcwCWY7_Cn5OtIlbQ' },
    { id: 7, title: 'Confident & Radiant', image: 'https://drive.google.com/uc?export=view&id=1lkzTAdFYNnjhpoRXt-JPtckhXw4v93gx' },
    { id: 8, title: 'The Dancer', image: 'https://drive.google.com/uc?export=view&id=1uzzwtvHEW5n2BAlQx2WaOgUaxkZ_7DqY' },
    { id: 9, title: 'Milestones', image: 'https://drive.google.com/uc?export=view&id=1mtqlM13bsqUS9EXqhTTOm4oZsbxkREQx' },
    { id: 10, title: 'Nearly There', image: 'https://drive.google.com/uc?export=view&id=1qjVdrsuEsg-lPwzFASnHAdYu9uxN5VE7' },
    { id: 11, title: 'Sweet 16 Beauty', image: 'https://drive.google.com/uc?export=view&id=1phTSCruHFOgvlq6EgNIV35wJDZl6HbQ3' },
    { id: 12, title: 'Ready to Shine', image: 'https://drive.google.com/uc?export=view&id=1eSP3IdgNGNLtIJxEL2TN1TLhlKQim7xp' }
  ];

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

  const celebrationElements = [
    { icon: '❤️', title: 'Love', description: 'From family and friends who cherish you' },
    { icon: '😄', title: 'Laughter', description: 'Joy and happiness throughout the evening' },
    { icon: '✨', title: 'Blessings', description: 'Wishes for a beautiful future' },
    { icon: '📸', title: 'Memories', description: '200+ moments frozen in time' }
  ];

  const nextGallery = () => setActiveGalleryIndex((prev) => (prev + 1) % Math.ceil(galleryPhotos.length / 4));
  const prevGallery = () => setActiveGalleryIndex((prev) => (prev - 1 + Math.ceil(galleryPhotos.length / 4)) % Math.ceil(galleryPhotos.length / 4));
  const nextPerformance = () => setActivePerformanceIndex((prev) => (prev + 1) % performances.length);
  const prevPerformance = () => setActivePerformanceIndex((prev) => (prev - 1 + performances.length) % performances.length);
  const nextJourney = () => setActiveJourneyIndex((prev) => (prev + 1) % journeyPhotos.length);
  const prevJourney = () => setActiveJourneyIndex((prev) => (prev - 1 + journeyPhotos.length) % journeyPhotos.length);

  return (
    <div className="w-full bg-purple-950 text-white overflow-hidden">
      {/* HERO SECTION WITH GOLD FLOWERS BACKGROUND */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/ygcsdi8i/image/upload/f_auto,q_auto/openart-54b4d96b3de74c2f98aa81cd47ea8529_raw_1779336058138_90f176ea_1_yg4g1g')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        {/* Gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-purple-950/50"></div>

        <div className="relative z-10 text-center max-w-4xl px-4 md:px-8 animate-slideIn">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-playfair font-black mb-6 leading-tight drop-shadow-lg">
            <span className="gradient-text">Jahnvi's</span>
            <br />
            <span className="gradient-text">Sweet Sixteen</span>
          </h1>

          {/* Date and details */}
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-amber-300 font-light drop-shadow">June 28, 2026</p>
            <p className="text-lg text-purple-100 drop-shadow">Fremont, California</p>
            <p className="text-purple-200 text-sm md:text-base font-light italic drop-shadow">Love • Laughter • Blessings • Memories</p>
          </div>

          {/* CTA Button */}
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 inline-block drop-shadow-lg">
            Explore the Celebration ↓
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-amber-300 drop-shadow">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center p-2 drop-shadow">
              <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAILER VIDEO */}
      <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-12 gradient-text">
            The Trailer
          </h2>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OHLJhJt1oXs"
              title="Jahnvi Sweet 16 - Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-center text-purple-300 mt-6 italic">Before her magical entry with Mahaksh</p>
        </div>
      </section>

      {/* ABOUT JAHNVI */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-12 gradient-text">
            About Jahnvi
          </h2>

          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-6">
              Jahnvi is a remarkable 16-year-old with an exceptional passion for the arts. For 8 years, she has trained in Bharatnatyam classical dance, mastering this beautiful traditional form with dedication and grace. Alongside her artistic pursuits, she has been committed to gymnastics since age 3, developing extraordinary strength, discipline, and poise.
            </p>
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              Her journey is a testament to unwavering commitment, boundless creativity, and the pursuit of excellence. Today, we celebrate not just her Sweet Sixteen milestone, but the remarkable young woman she has become—a true artist, an athlete, and an inspiration to all who know her.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY - CHILDHOOD TO 16 */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-16 gradient-text">
            Journey: Childhood to 16
          </h2>

          <div className="relative">
            {/* Main Photo Display */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900 mb-12">
              <div className="relative w-full aspect-square md:aspect-video">
                <img
                  src={journeyPhotos[activeJourneyIndex].image}
                  alt={journeyPhotos[activeJourneyIndex].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#2d1b69';
                  }}
                />
              </div>
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white">
                  {journeyPhotos[activeJourneyIndex].title}
                </h3>
                <p className="text-amber-300 mt-2">Photo {activeJourneyIndex + 1} of {journeyPhotos.length}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <button
                onClick={prevJourney}
                className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2 flex-wrap justify-center">
                {journeyPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveJourneyIndex(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === activeJourneyIndex ? 'bg-amber-400 w-8' : 'bg-purple-600 w-3'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextJourney}
                className="p-3 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 hover:shadow-lg hover:shadow-amber-500/50 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-4">
              {journeyPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActiveJourneyIndex(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeJourneyIndex ? 'border-amber-400 scale-110' : 'border-purple-600 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENING'S ESSENCE */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-20 gradient-text">
            The Evening's Essence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrationElements.map((element, i) => (
              <div
                key={i}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 text-center h-full">
                  <div className="text-6xl mb-4">{element.icon}</div>
                  <div className="text-3xl font-playfair font-bold text-amber-300 mb-2">{element.title}</div>
                  <div className="text-purple-200 text-sm">{element.description}</div>
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

      {/* 16-YEAR RECAP VIDEO */}
      <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-12 gradient-text">
            16-Year Recap
          </h2>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/O_UhzXh9bPI"
              title="Jahnvi 16-Year Recap"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-center text-purple-300 mt-6 italic">A celebration of 16 beautiful years</p>
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

      {/* SIBLING MOMENTS VIDEO */}
      <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-playfair font-black text-center mb-12 gradient-text">
            Sibling Moments
          </h2>
          
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-purple-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/96jLlKhkqZI"
              title="Jahnvi & Mahaksh Sibling Moments"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <p className="text-center text-purple-300 mt-6 italic">Special moments with her beloved brother Mahaksh</p>
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
            A celebration filled with love, laughter, blessings, and beautiful memories
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
