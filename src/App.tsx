import { motion } from 'motion/react';
import { Menu, Instagram, Globe, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
    <div className="font-display font-extrabold text-xl tracking-tighter uppercase">
      Atulya Jha <span className="font-light opacity-50">| 2026</span>
    </div>
    <div className="flex gap-8 items-center">
      <div className="hidden md:flex gap-6 text-xs font-bold tracking-widest uppercase">
        <a href="#photography" className="hover:line-through">Photography</a>
        <a href="#illustrations" className="hover:line-through">Illustrations</a>
        <a href="#info" className="hover:line-through">Info</a>
      </div>
      <button className="p-2">
        <Menu size={24} />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
    {/* Watermark Background */}
    <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
      <motion.span 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-watermark whitespace-nowrap"
      >
        vision & experience
      </motion.span>
    </div>

    {/* Floating Word Cloud */}
    <div className="relative w-full h-full max-w-7xl px-6 py-20">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-[20%] left-[10%] md:left-[15%]"
      >
        <h1 className="heading-huge">Portfolio</h1>
      </motion.div>

      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-[45%] left-[5%] md:left-[10%]"
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Selected Works</span>
        <h2 className="heading-large">2026</h2>
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-[35%] right-[5%] md:right-[15%] text-right"
      >
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold tracking-[0.2em] uppercase hover:line-through cursor-pointer">Photography</span>
          <span className="text-sm font-bold tracking-[0.2em] uppercase hover:line-through cursor-pointer">Digital Illustrations</span>
          <span className="text-sm font-bold tracking-[0.2em] uppercase hover:line-through cursor-pointer">Commercial Work</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-[15%] left-[50%] -translate-x-1/2 text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-ink/20"></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-40"
          >
            Scroll to explore
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Marquee = () => (
  <div className="sticky top-0 z-40 bg-white border-y border-ink overflow-hidden py-4">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-xs font-bold tracking-[0.4em] uppercase mx-12">
          Photography • Digital Art • Editorials • Commissions • Exhibitions •
        </span>
      ))}
    </div>
  </div>
);

const GalleryGrid = () => {
  const images = [
    { id: 1, title: "URBAN STUDY 01", category: "Photography", src: "https://picsum.photos/seed/urban1/800/1000" },
    { id: 2, title: "CYBERPUNK DREAM", category: "Illustration", src: "https://picsum.photos/seed/cyber1/800/800" },
    { id: 3, title: "MINIMALIST FLOW", category: "Illustration", src: "https://picsum.photos/seed/flow1/800/1200" },
    { id: 4, title: "STREET SOUL", category: "Photography", src: "https://picsum.photos/seed/street1/800/1000" },
    { id: 5, title: "NEON NIGHTS", category: "Photography", src: "https://picsum.photos/seed/neon1/800/800" },
    { id: 6, title: "DIGITAL NATURE", category: "Illustration", src: "https://picsum.photos/seed/nature1/800/1100" },
  ];

  return (
    <section id="photography" className="py-20 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((img) => (
          <motion.div 
            key={img.id}
            whileHover={{ scale: 0.98 }}
            className="relative group aspect-[3/4] overflow-hidden bg-ghost"
          >
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-8 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60 mb-2">{img.category}</span>
              <h3 className="text-primary font-display font-extrabold text-2xl tracking-tighter uppercase leading-none">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectSplit = () => (
  <section className="flex flex-col md:flex-row min-h-screen border-t border-ink">
    <div className="md:w-1/3 p-8 md:p-12 md:sticky md:top-20 h-fit">
      <span className="text-xs font-bold tracking-widest uppercase opacity-40 mb-4 block">Project Series</span>
      <h2 className="heading-large mb-6">01. Digital Illustration</h2>
      <p className="text-sm leading-relaxed max-w-xs opacity-70">
        A deep dive into the intersection of organic forms and digital precision. This series explores the boundaries of human perception in a post-analog world.
      </p>
    </div>
    <div className="md:w-2/3 flex flex-col gap-1 bg-ink">
      <img src="https://picsum.photos/seed/proj1/1200/1600" alt="Project Detail" className="w-full grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
      <img src="https://picsum.photos/seed/proj2/1200/1600" alt="Project Detail" className="w-full grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
      <img src="https://picsum.photos/seed/proj3/1200/1600" alt="Project Detail" className="w-full grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
    </div>
  </section>
);

const CVSection = () => (
  <section id="info" className="py-32 px-6 md:px-12 bg-primary">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="space-y-6">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase border-b border-ink pb-2">Selected Exhibitions</h3>
        <ul className="space-y-4 text-sm">
          <li><span className="font-bold">2025</span> — Digital Frontiers, NYC</li>
          <li><span className="font-bold">2024</span> — Monochrome Visions, Tokyo</li>
          <li><span className="font-bold">2024</span> — The New Aesthetic, Berlin</li>
        </ul>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase border-b border-ink pb-2">Commercial Clients</h3>
        <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter text-xl">
          <li>Nike</li>
          <li>Adobe</li>
          <li>Sony Music</li>
          <li>Vogue India</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase border-b border-ink pb-2">Digital Toolset</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
          <span>Procreate</span>
          <span>Adobe CC</span>
          <span>Sony A7IV</span>
          <span>Figma</span>
          <span>Blender</span>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase border-b border-ink pb-2">Awards & Features</h3>
        <ul className="space-y-4 text-sm">
          <li>Behance Featured — Illustration</li>
          <li>Adobe Design Achievement Awards</li>
          <li>Vogue Photo of the Year (Shortlist)</li>
        </ul>
      </div>

      <div className="space-y-6 lg:col-span-2">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase border-b border-ink pb-2">Creative Philosophy</h3>
        <p className="heading-medium lowercase italic">
          "I find the greatest professional satisfaction in designing things you can actually hold in your hands."
        </p>
        <div className="pt-8">
          <a href="#" className="inline-block text-xs font-bold tracking-[0.3em] uppercase bg-ink text-primary px-8 py-4 hover:bg-ghost hover:text-ink transition-colors">
            Visit Print Shop
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-40 px-6 text-center bg-ink text-primary overflow-hidden relative">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <span className="text-watermark text-primary">contact</span>
    </div>
    <div className="relative z-10">
      <h2 className="heading-huge mb-8">Hit Me Up</h2>
      <a 
        href="mailto:hello@atulyajha.com" 
        className="text-2xl md:text-5xl font-display font-bold underline underline-offset-8 decoration-1 hover:decoration-4 transition-all"
      >
        hello@atulyajha.com
      </a>
      <p className="mt-12 text-xs font-bold tracking-[0.4em] uppercase opacity-60">
        Currently accepting commissions for 2026.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-ink/10">
    <div className="flex gap-8 text-[10px] font-bold tracking-[0.3em] uppercase">
      <a href="#" className="flex items-center gap-2 hover:line-through"><Instagram size={14} /> Instagram</a>
      <a href="#" className="flex items-center gap-2 hover:line-through"><ExternalLink size={14} /> Behance</a>
      <a href="#" className="flex items-center gap-2 hover:line-through"><Globe size={14} /> ArtStation</a>
    </div>
    <div className="text-[10px] opacity-40 uppercase tracking-widest">
      © 2026 Atulya Jha. All Rights Reserved.
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-ink selection:text-primary">
      <Navbar />
      <Hero />
      <Marquee />
      <GalleryGrid />
      <ProjectSplit />
      <CVSection />
      <Contact />
      <Footer />
    </div>
  );
}
