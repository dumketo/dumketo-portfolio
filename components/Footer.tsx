import React from 'react';
import { Profile } from '../types';

interface FooterProps {
  profile?: Profile;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-slate-950 py-6 border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>      
      <div className="container mx-auto px-6 text-center">       
        <div className="text-slate-600 text-sm flex flex-col items-center gap-2">
          <p>© {new Date().getFullYear()} {profile?.name || 'Portfolio'}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;