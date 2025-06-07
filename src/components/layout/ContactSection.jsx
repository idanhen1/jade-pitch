
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white p-8 sm:p-12 rounded-xl shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-3 text-center">Get in Touch</h2>
        <p className="text-slate-600 mb-10 text-center text-lg">
          We'd love to hear from you. Let's talk about how Jade can secure your operations.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <Input id="name" type="text" placeholder="Your Name" className="w-full"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="w-full"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <Textarea id="message" placeholder="Your message..." rows={4} className="w-full"/>
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-base">
              Send Message
            </Button>
          </form>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a href="mailto:hello@jadesecurity.com" className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>hello@jadesecurity.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>Tel Aviv, Israel (Global Operations)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors p-2 bg-slate-100 rounded-full hover:bg-emerald-50">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 transition-colors p-2 bg-slate-100 rounded-full hover:bg-emerald-50">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
