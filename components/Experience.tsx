"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { ExperienceItem } from '../types';
import { EXPERIENCE } from '../constants';

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences = EXPERIENCE }) => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Professional Journey
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-700"></div>

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-brand-500 rounded-full border-4 border-slate-900 z-10 top-6"></div>

                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-brand-500/50 transition-colors shadow-lg ${
                     index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <div className="flex items-center gap-2 text-brand-400 font-medium">
                          <Briefcase size={14} />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                         <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300 whitespace-nowrap">
                            <Calendar size={12} />
                            {job.period}
                         </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1 text-slate-500 text-xs pt-4 border-t border-slate-700">
                      <MapPin size={12} />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                {/* Empty spacer for the other side of the timeline */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;