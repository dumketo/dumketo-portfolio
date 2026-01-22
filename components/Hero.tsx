"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { Profile } from '../types';



interface HeroProps {
  profile?: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  if (!profile) return null;
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-brand-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />
      <div className="absolute bottom-0 left-0 -z-10 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl opacity-50 mix-blend-screen" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Subtle Looping Badge Animation */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border text-brand-300 text-sm font-medium backdrop-blur-sm"
            animate={{ 
              borderColor: ["rgba(20, 184, 166, 0.3)", "rgba(20, 184, 166, 0.6)", "rgba(20, 184, 166, 0.3)"],
              boxShadow: ["0 0 0px rgba(20, 184, 166, 0)", "0 0 12px rgba(20, 184, 166, 0.15)", "0 0 0px rgba(20, 184, 166, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-2 w-2">
              <motion.span 
                className="absolute inline-flex h-full w-full rounded-full bg-brand-400"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Available for New Projects
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">{profile.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 font-light">
            {profile.title}
          </h2>

          <p className="text-slate-300 max-w-lg leading-relaxed">
            {profile.about}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Contact Me Button */}
            <motion.a 
              href="#contact"
              className="group relative px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold shadow-lg shadow-brand-900/20 flex items-center gap-2 overflow-hidden"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1 },
                hover: { 
                  scale: 1.05, 
                  backgroundColor: "#14b8a6", // brand-500
                  boxShadow: "0 0 25px rgba(20, 184, 166, 0.5)"
                },
                tap: { scale: 0.95 }
              }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              
              <span className="relative z-20">Contact Me</span>
              <motion.span 
                className="relative z-20"
                variants={{
                  initial: { x: 0 },
                  hover: { x: 5 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>

            {/* Download CV Button */}
            <motion.a 
              href={profile.resume_full_url}
              download="Resume_Hasan_Ahmed_Jobayer.pdf"
              className="px-8 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              target="_blank"
              variants={{
                initial: { scale: 1, borderColor: "rgba(51, 65, 85, 1)" },
                hover: { 
                  scale: 1.05, 
                  backgroundColor: "#1e293b",
                  borderColor: "rgba(20, 184, 166, 0.5)", // brand-500
                  boxShadow: "0 0 15px rgba(20, 184, 166, 0.2)"
                },
                tap: { scale: 0.95 }
              }}
            >
              <span>Download CV</span>
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hover: { y: 3 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Download size={18} />
              </motion.span>
            </motion.a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-slate-400">
             <div className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <MapPin size={18} />
                <span className="text-sm">{profile.location}</span>
             </div>
             <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <Mail size={18} />
                <span className="text-sm">{profile.email}</span>
             </a>
          </div>
        </motion.div>

        {/* Hero Image / Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Increased container size significantly for bigger impact */}
          <div className="relative w-[35rem] h-[44rem] mx-auto group">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
             
             {/* Image Container with Animation */}
             <motion.div 
               className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-slate-800 shadow-2xl bg-slate-800"
               whileHover={{ 
                 scale: 1.05, 
                 rotate: 2,
                 filter: "brightness(1.1)",
               }}
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
             >
                <img 
                   src={profile.image_full_url || "https://raw.githubusercontent.com/dumketo/Resume/master/14.png"} 
                  alt={profile.name} 
                  className="w-full h-full object-cover cursor-pointer"
                  onError={(e) => {
                    // Fallback to placeholder if /hero.jpg is not found
                    e.currentTarget.src = "/image/5.png";
                    e.currentTarget.onerror = null; 
                  }}
                />
             </motion.div>
             
             {/* Floating Badge 1 - Top Left */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-12 -left-10 z-20 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl"
             >
                <div className="text-brand-400 font-bold text-xl">10+</div>
                <div className="text-slate-400 text-xs">Years Experience</div>
             </motion.div>

             {/* Floating Badge 2 - Bottom Right */}
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-12 -right-6 z-20 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl"
             >
                <div className="text-blue-400 font-bold text-xl">500+</div>
                <div className="text-slate-400 text-xs">Projects Completed</div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;