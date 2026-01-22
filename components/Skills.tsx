"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Skill, Profile } from '../types';


const TECH_STACK = [
  { name: "WordPress", slug: "wordpress", color: "white" },
  { name: "WooCommerce", slug: "woocommerce", color: "white" },
  { name: "Shopify", slug: "shopify", color: "white" },
  { name: "Webflow", slug: "webflow" },
  { name: "Wix", slug: "wix", color: "white" },
  { name: "Squarespace", slug: "squarespace", color: "white" },
  { name: "Joomla", slug: "joomla", color: "white" },
  { name: "HubSpot", slug: "hubspot", color: "white" },
  { name: "Craft CMS", slug: "craftcms", color: "white" },
  { name: "HTML5", slug: "html5", color: "white" },
  { name: "CSS", slug: "css", color: "white" },
  { name: "React", slug: "react", color: "white" },
  { name: "Java Script", slug: "javascript", color: "white" },
  { name: "JQuery", slug: "jquery", color: "white" },
  { name: "Bootstrap", slug: "bootstrap", color: "white" },
  { name: "Tailwind", slug: "tailwindcss", color: "white" },
  { name: "PHP", slug: "php", color: "white" },
  { name: "MySQL", slug: "mysql", color: "white" },
  { name: "Git", slug: "git", color: "white" },
  { name: "Figma", slug: "figma", color: "white" },
  { name: "Elementor", slug: "elementor", color: "white" },  
  { name: "Linux", slug: "linux", color: "white" }
];

interface SkillsProps {
  skills?: Skill[];
  profile?: Profile | null;
}

const Skills: React.FC<SkillsProps> = ({ skills, profile }) => {
  // Duplicate the array to ensure seamless infinite scroll
  const MARQUEE_ITEMS = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  const getSkillsByCategory = (category: string) => {
    return skills
      ?.filter(skill => skill.category.toLowerCase() === category.toLowerCase())
      .map(skill => skill.name)
      .join(', ') || 'No skills listed';
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Technical Expertise
            </motion.h2>
            <p className="text-slate-400 mb-8 leading-relaxed whitespace-pre-line">
              {profile?.technical_expertise || "My core competencies lie in full-stack engineering, with a specialized focus on the WordPress ecosystem and modern JavaScript frameworks. I bridge the gap between complex backend logic and pixel-perfect frontend design."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-brand-500/30 transition-colors group">
                <h4 className="text-brand-400 font-bold mb-1 group-hover:text-brand-300">Frontend</h4>
                <p className="text-sm text-slate-400">{getSkillsByCategory('frontend')}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-brand-500/30 transition-colors group">
                <h4 className="text-brand-400 font-bold mb-1 group-hover:text-brand-300">Backend</h4>
                <p className="text-sm text-slate-400">{getSkillsByCategory('backend')}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-brand-500/30 transition-colors group">
                <h4 className="text-brand-400 font-bold mb-1 group-hover:text-brand-300">CMS</h4>
                <p className="text-sm text-slate-400">{getSkillsByCategory('cms')}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-brand-500/30 transition-colors group">
                <h4 className="text-brand-400 font-bold mb-1 group-hover:text-brand-300">Tools</h4>
                <p className="text-sm text-slate-400">{getSkillsByCategory('tools')}</p>
              </div>
            </div>
          </div>

          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {skills.map((skill) => (
              <motion.div 
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group cursor-default"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium group-hover:text-brand-300 transition-colors">{skill.name}</span>
                  <span className="text-brand-400 text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]"></div>
                  
                  <motion.div 
                    className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full relative overflow-hidden"
                    variants={{
                      hidden: { width: 0 },
                      visible: { 
                        width: `${skill.level}%`,
                        transition: { duration: 1.2, ease: "circOut", delay: 0.2 } 
                      }
                    }}
                  >
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full Width Modern Slider - Authentic Images */}
      <div className="w-full relative border-y border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
        
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track - Added vertical padding HERE inside the overflow container to prevent tooltip clipping */}
        <div className="overflow-hidden flex group/track py-24">
          <div className="flex gap-16 md:gap-24 items-center animate-marquee whitespace-nowrap px-10 group-hover/track:[animation-play-state:paused]">
            {MARQUEE_ITEMS.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="group/item relative flex flex-col items-center justify-center cursor-pointer min-w-[100px]"
              >
                {/* Tooltip - Refined Appearance with Animation */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 scale-75 group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:translate-y-0 translate-y-4 transition-all duration-300 ease-out z-40 pointer-events-none origin-bottom">
                  <div className="relative flex flex-col items-center">
                    <div className="bg-slate-900/95 backdrop-blur-xl text-brand-300 text-xs font-bold tracking-wider px-4 py-2 rounded-lg border border-brand-500/30 shadow-[0_0_20px_rgba(20,184,166,0.3)] whitespace-nowrap">
                      {tech.name}
                    </div>
                    {/* Arrow */}
                    <div className="w-3 h-3 bg-slate-900 border-b border-r border-brand-500/30 rotate-45 -mt-1.5"></div>
                  </div>
                </div>

                {/* Icon Container */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  {/* Bloom Effect - Background Light */}
                  <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 ease-out"></div>
                  
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color || ''}`} 
                    alt={tech.name}
                    className="relative z-20 w-12 h-12 md:w-14 md:h-14 object-contain opacity-50 grayscale transition-all duration-300 ease-in-out
                               group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation Keyframes Injection */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
            width: max-content;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;