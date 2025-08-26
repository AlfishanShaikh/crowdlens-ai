import React from 'react';
import { Eye, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-800">AI</span>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold">CrowdLens AI</span>
            </div>
            <p className="text-sm sm:text-base text-slate-400 max-w-md mb-4 sm:mb-6">
              Empowering communities through AI-powered citizen reporting. Making civic engagement 
              easier, faster, and more effective for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ShaikhAlfishan" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shaikh-alfishan/" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              {/* <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/report" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">Report Issue</a></li>
              <li><a href="/reports" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">View Reports</a></li>
              <li><a href="/about" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-sm sm:text-base text-slate-400">contact@crowdlens.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-sm sm:text-base text-slate-400">+91-60000-12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="text-sm sm:text-base text-slate-400">Aurangabad, MH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-slate-400">
          <p className="text-sm sm:text-base">&copy; 2025 CrowdLens AI. All rights reserved. Built with ❤️ for better communities.</p>
        </div>
      </div>
    </footer>
  );
};
