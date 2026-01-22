"use client";
import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle, Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Profile } from '../types';

import Turnstile from 'react-turnstile';

const ContactItem: React.FC<{ 
  icon: React.ElementType, 
  label: string, 
  value: string, 
  href: string, 
  canCopy?: boolean 
}> = ({ icon: Icon, label, value, href, canCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500"></div>
      
      <div className="relative p-3 bg-brand-500/20 rounded-lg text-brand-200 group-hover:text-white transition-colors">
        <Icon size={20} />
      </div>
      
      <div className="relative flex-1 min-w-0">
        <p className="text-xs text-brand-200/60 mb-1 uppercase tracking-wider font-semibold">{label}</p>
        <a href={href} className="text-slate-100 font-medium hover:text-brand-300 transition-colors block truncate">
          {value}
        </a>
      </div>

      {canCopy && (
        <button 
          onClick={handleCopy}
          className="relative z-10 p-2 text-brand-200/40 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          title="Copy to clipboard"
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
          <AnimatePresence>
            {copied && (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-brand-500 text-white px-2 py-1 rounded shadow-lg"
              >
                COPIED
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      )}
    </div>
  );
};

const SocialButton: React.FC<{ href: string, icon: React.ElementType, label: string }> = ({ href, icon: Icon, label }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-slate-900/50 text-slate-400 border border-slate-700 rounded-lg hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all duration-300 group"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
    title={label}
  >
    <Icon size={20} />
  </motion.a>
);

// Floating Label Input Component
const FloatingInput = ({ label, id, status, value, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative pt-1 group">
        <div className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-7"></div>
      </div>
    );
  }

  const hasValue = value && value.toString().length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative pt-1 group">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -28 : 0,
          scale: isFloating ? 1.1 : 1, // Slight scale up on focus
          color: isFocused ? '#2dd4bf' : '#94a3b8', // brand-400 : slate-400
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ originX: 0 }}
        className={`absolute left-4 top-3.5 text-xs font-bold uppercase tracking-wider pointer-events-none z-20 transition-opacity ${!isFloating ? 'opacity-50' : 'opacity-100'}`}
      >
        {label}
      </motion.label>
      <motion.input
        id={id}
        value={value}
        {...props}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => { setIsFocused(true); props.onFocus?.(e); }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { setIsFocused(false); props.onBlur?.(e); }}
        placeholder={isFocused ? props.placeholder : ""}
        className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder:text-slate-600/50"
        variants={{
          idle: { scale: 1, opacity: 1, zIndex: 1 },
          focus: { scale: 1.02, zIndex: 10, transition: { type: "spring", stiffness: 300 } },
          submitting: { scale: 0.98, opacity: 0.7, zIndex: 1 },
          success: { scale: 1 }
        }}
        animate={status === 'submitting' ? 'submitting' : status === 'success' ? 'success' : isFocused ? 'focus' : 'idle'}
      />
    </div>
  );
};

// Floating Label Textarea Component
const FloatingTextarea = ({ label, id, status, value, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative pt-1 group">
         <div className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-16"></div>
      </div>
    );
  }

  const hasValue = value && value.toString().length > 0;
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative pt-1 group">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFloating ? -28 : 0,
          scale: isFloating ? 1.1 : 1,
          color: isFocused ? '#2dd4bf' : '#94a3b8',
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ originX: 0 }}
        className={`absolute left-4 top-3.5 text-xs font-bold uppercase tracking-wider pointer-events-none z-20 transition-opacity ${!isFloating ? 'opacity-50' : 'opacity-100'}`}
      >
        {label}
      </motion.label>
      <motion.textarea
        id={id}
        value={value}
        {...props}
        onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => { setIsFocused(true); props.onFocus?.(e); }}
        onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => { setIsFocused(false); props.onBlur?.(e); }}
        placeholder={isFocused ? props.placeholder : ""}
        className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors placeholder:text-slate-600/50 resize-none"
        variants={{
          idle: { scale: 1, opacity: 1, zIndex: 1 },
          focus: { scale: 1.02, zIndex: 10, transition: { type: "spring", stiffness: 300 } },
          submitting: { scale: 0.98, opacity: 0.7, zIndex: 1 },
          success: { scale: 1 }
        }}
        animate={status === 'submitting' ? 'submitting' : status === 'success' ? 'success' : isFocused ? 'focus' : 'idle'}
      />
    </div>
  );
};

interface ContactProps {
  profile?: Profile;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [captchaToken, setCaptchaToken] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    if (!captchaToken) {
        alert("Please verify you are human.");
        setStatus('idle');
        return;
    }

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          captcha_token: captchaToken
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setCaptchaToken(''); // Reset token
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        const data = await response.json().catch(() => ({}));
        console.error("Submission failed", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const buttonVariants: Variants = {
    idle: { 
      scale: 1, 
      backgroundColor: '#0d9488', // brand-600
      transition: { duration: 0.2 }
    },
    hover: { 
      scale: 1.02, 
      backgroundColor: '#14b8a6', // brand-500
    },
    tap: { 
      scale: 0.98 
    },
    submitting: { 
      scale: 1, 
      backgroundColor: '#0f766e', // brand-700
      cursor: 'wait' 
    },
    success: { 
      scale: 1, 
      backgroundColor: '#16a34a', // green-600
      cursor: 'default'
    },
    error: {
      scale: 1,
      backgroundColor: '#ef4444', // red-500
      cursor: 'default'
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute bottom-0 right-0 -z-10 w-[30rem] h-[30rem] bg-brand-900/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
        >
          <div className="grid md:grid-cols-5 min-h-[600px]">
            
            {/* Info Side - Enhanced Interactive Design */}
            <div className="md:col-span-2 p-8 md:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900/30 flex flex-col justify-between relative overflow-hidden">
               {/* Ambient Light */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

               <div className="relative z-10">
                 <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                   Have a project in mind or want to discuss modern web solutions? I'm always open to new opportunities.
                 </p>
                 
                 <div className="space-y-4">
                   <ContactItem 
                     icon={Mail} 
                     label="Email Address" 
                     value={profile.email} 
                     href={`mailto:${profile.email}`}
                     canCopy
                   />
                   <ContactItem 
                     icon={Phone} 
                     label="Phone Number" 
                     value={profile.phone} 
                     href={`tel:${profile.phone}`}
                     canCopy
                   />
                   <ContactItem 
                     icon={MapPin} 
                     label="Location" 
                     value={profile.location} 
                     href="#"
                   />
                 </div>
               </div>

               <div className="relative z-10 mt-12 pt-8 border-t border-slate-700/50">
                 <p className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-4">Connect Socially</p>
                 <div className="flex gap-3">                    
                    <SocialButton href={profile.linkedin_url} icon={Linkedin} label="LinkedIn" />
                    <SocialButton href={profile.facebook_url} icon={Facebook} label="Facebook" />
                 </div>
               </div>
            </div>

            {/* Form Side */}
            <div className="md:col-span-3 p-8 md:p-10 bg-slate-800/50">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white">Send me a message</h4>
                <div className="h-1 w-10 bg-brand-500 rounded-full mt-2"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FloatingInput
                    id="name"
                    name="name"
                    label="Full Name"
                    value={formState.name}
                    onChange={handleChange}
                    status={status}
                    placeholder="John Doe"
                    disabled={status === 'submitting'}
                  />
                  <FloatingInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={formState.email}
                    onChange={handleChange}
                    status={status}
                    placeholder="john@example.com"
                    disabled={status === 'submitting'}
                  />
                </div>
                
                <FloatingTextarea
                  id="message"
                  name="message"
                  label="Message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  status={status}
                  placeholder="Tell me about your project needs..."
                  disabled={status === 'submitting'}
                />

                <div className="mb-4">
                   {/* CAPTCHA Widget */}
                   <Turnstile
                     sitekey={profile.turnstile_site_key || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                     onVerify={(token) => setCaptchaToken(token)}
                     theme="dark"
                   />
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    variants={buttonVariants}
                    initial="idle"
                    animate={status}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full md:w-auto px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-900/20 text-white overflow-hidden relative min-w-[160px]"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {status === 'submitting' && (
                        <motion.span
                          key="submitting"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="animate-spin" size={20} /> Sending...
                        </motion.span>
                      )}
                      {status === 'success' && (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle size={20} /> Sent!
                        </motion.span>
                      )}
                      {status === 'error' && (
                        <motion.span
                          key="error"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <AlertCircle size={20} /> Failed
                        </motion.span>
                      )}
                      {status === 'idle' && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={18} /> Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;