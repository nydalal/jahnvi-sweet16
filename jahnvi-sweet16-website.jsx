import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';

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

  // Journey photos - Childhood to 16 years
  const journeyPhotos = [
    { id: 1, title: 'Early Years', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783269568/Jahnvi-2010-1_dxojsb.jpg' },
    { id: 2, title: 'Growing Up', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783269565/Jahnvi-2016-8_jyuh28.jpg' },
    { id: 3, title: 'Artistic Journey', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396657/BNAT-1_lbjcfa.jpg' },
    { id: 4, title: 'Strength & Grace', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396683/Indian-4_tvauz5.jpg' },
    { id: 5, title: 'Blossoming', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396694/dance-2_u21zrn.jpg' },
    { id: 6, title: 'Teen Years', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396818/Jahnvi-11by14-2_tdcpx5.jpg' },
    { id: 7, title: 'Confident & Radiant', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396827/Jahnvi-11by14-1_doalxq.jpg' },
    { id: 8, title: 'The Dancer', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783397041/BNAT-13_so52rz.jpg' },
    { id: 9, title: 'Milestones', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783396831/Jahnvi-11by14-3_yczd17.jpg' },
    { id: 10, title: 'Nearly There', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783397102/virginia-3_wlfbve.jpg' },
    { id: 11, title: 'Sweet 16 Beauty', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783397224/DSC01525_oki02v.jpg' },
    { id: 12, title: 'Ready to Shine', image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783397286/DSC01532_fy596z.jpg' }
  ];

  const galleryPhotos = [
    { id: 1, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445498/DSC01532_1_jo5gak.jpg' },
    { id: 2, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445496/DSC01440_qpm3fx.jpg' },
    { id: 3, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445495/DSC01281_jfaujk.jpg' },
    { id: 4, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445495/DSC01454_mmtfds.jpg' },
    { id: 5, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445494/DSC01362_acpvnb.jpg' },
    { id: 6, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445492/DSC01282_t0dfb1.jpg' },
    { id: 7, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445492/DSC01550_fvuhqx.jpg' },
    { id: 8, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445491/DSC01443_cklwej.jpg' },
    { id: 9, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445489/DSC01441_ajmdel.jpg' },
    { id: 10, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445489/DSC01431_2_nwlgz9.jpg' },
    { id: 11, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445488/DSC01256_vvsxnc.jpg' },
    { id: 12, image: 'https://res.cloudinary.com/ygcsdi8i/image/upload/v1783445487/DSC01525_1_mb5tw9.jpg' }
  ];

  const performances = [
    { id: 1, title: 'Opening Dance', performer: 'Avani & Nishit', type: '🎬 Bollywood Fiesta' },
    { id: 2, title: 'Avani & Sakhi Group Dance', performer: 'Avani & Friends', type: '👭 Jamkudi Magic' },
    { id: 3, title: 'BAYVP Couple Dance - 1', performer: 'BAYVP Dancers', type: '💃 Divine Duet' },
    { id: 4, title: 'Bollywood Couple Dance - 2', performer: 'Dance Couple', type: '💃 Bollywood Romance' },
    { id: 5, title: 'Bollywood Couple Dance - 3', performer: 'Dance Couple', type: '💃 Shimmer & Shine' },
    { id: 6, title: 'BAYVP Fab-4 Performance', performer: 'BAYVP Stars', type: '✨ Quad Magic' },
    { id: 7, title: 'Jahnvi School Friends - 1', performer: 'School Friends', type: '👯 Friendship Beats' },
    { id: 8, title: 'Jahnvi School Friends - 2', performer: 'School Friends', type: '👯 Squad Goals' },
    { id: 9, title: 'Avani Solo Performance', performer: 'Avani', type: '🌟 Solo Spotlight' },
    { id: 10, title: 'Bollywood Couple Dance - 4', performer: 'Dance Couple', type: '💃 Bollywood Bliss' },
    { id: 11, title: 'Bollywood Couple Dance - 5', performer: 'Dance Couple', type: '💃 Groove Paradise' },
    { id: 12, title: 'Grand Finale', performer: 'Avani & Nishit', type: '👑 Spectacular Finale' }
  ];

  const timelineEvents = [
    { time: '5:30 PM', title: 'Guest Arrival', emoji: '🎉' },
    { time: '6:30 PM', title: 'Event Starts - Avani & Nishit Entry', emoji: '👑' },
    { time: '6:45 PM', title: 'Mahaksh & Jahnvi Entry', emoji: '⭐' },
    { time: '6:50 PM', title: "Mahaksh's Speech", emoji: '💬' },
    { time: '7:00 PM', title: '12 Dance Performances', emoji: '💃' },
    { time: '8:00 PM', title: 'Heartfelt Speeches', emoji: '❤️' },
    { time: '8:30 PM', title: 'Cake Cutting', emoji: '🎂' },
    { time: '8:40 PM', title: "Avani & Nishit's Speech", emoji: '👨‍👩‍👧' },
    { time: '9:00 PM', title: 'Dinner & Celebrations Continue', emoji: '✨' }
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

      {/* FATHER'S REFLECTION - GUJARATI OPENING */}
      <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-center mb-12 gradient-text">
            એક પિતાનું પ્રતિબિંબ
          </h2>
          
          <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 backdrop-blur-lg border border-purple-700/30 rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed text-center italic font-light">
              "બની ગુમરાહ અટવાતા જીવનની વાત કરવી છે,
              <br />ખીલ્યાની સાથે જ સુગંધિત પૂષ્પની વાત કરવી છે,
              <br />અથાગ મેહનતની સાથે જેણે પ્રેમનો ધોધ વરસાવ્યો છે,
              <br />તેવી વ્હાલસોયી દીકરી જાહન્વી ના સોળ વરસ ની વાત કરવી છે।"
            </p>
            <p className="text-center text-amber-300 mt-6 text-sm">~ નિશિત દલાલ</p>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900 mb-12 bg-gradient-to-br from-purple-800/30 to-purple-900/30 border border-purple-700/30 flex items-center justify-center min-h-96">
              {journeyPhotos[activeJourneyIndex].image ? (
                <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
                  <img
                    src={journeyPhotos[activeJourneyIndex].image}
                    alt={journeyPhotos[activeJourneyIndex].title}
                    className="max-w-full max-h-96 md:max-h-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-full h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-purple-300 text-lg">Photo {activeJourneyIndex + 1}: {journeyPhotos[activeJourneyIndex].title}</p>
                    <p className="text-purple-400 text-sm mt-2">(Ready for photo URL)</p>
                  </div>
                </div>
              )}
              
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
                  } bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center`}
                >
                  {photo.image ? (
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-purple-300 text-2xl">📸</span>
                  )}
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
                <div key={photo.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg">
                  <img
                    src={photo.image}
                    alt={`Memory ${photo.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
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

      {/* GOOGLE PHOTOS LINK */}
      <section className="py-24 px-4 md:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-playfair font-black mb-6 gradient-text">
            View All Photos
          </h3>
          
          <p className="text-lg text-purple-200 mb-8">
            Browse all 200+ photos from the celebration:
          </p>

          <a
            href="https://photos.app.goo.gl/SPD47qjZmcgvKLxq7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 drop-shadow-lg"
          >
            📸 Open Full Google Photos Gallery
          </a>

          <p className="text-purple-400 mt-6 text-sm">
            Click to view all 200+ professional photos from the evening
          </p>
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
            <p className="text-purple-100 mb-4 text-lg italic font-light leading-relaxed">
              "ભગવદ્ ગીતામાં જેટલું મહત્વ ભક્તિયોગનું છે, એટલું જ મહત્વ મારી જીવનગીતામાં "દીકરીયોગ"નું છે।"
            </p>
            <p className="text-sm text-purple-400 italic">
              ~ નિશિત દલાલ
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
