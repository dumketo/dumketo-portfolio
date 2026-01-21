"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface PortfolioProps {
  projects?: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects = PROJECTS }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map(p => p.category)));
    return ["All", ...cats];
  }, [projects]);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    return activeCategory === "All" 
      ? projects 
      : projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A selection of complex web applications and e-commerce solutions I've architected.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-900/20'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={project.image_full_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noreferrer"
                       className="p-3 bg-white text-brand-900 rounded-full hover:bg-brand-400 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                       title="View Live Site"
                     >
                       <ExternalLink size={24} />
                     </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold tracking-wider text-brand-400 uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>
                
                {/* Bottom Decoration */}
                <div className="h-1 w-0 bg-brand-500 transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;