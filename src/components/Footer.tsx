
import React from "react";
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">
              John<span className="text-pink-400">Designer</span>
            </Link>
            <p className="text-white/80 max-w-md">
              Creating stunning digital experiences that help businesses grow and connect with their audience through thoughtful design.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://twitter.com" className="hover:text-pink-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-pink-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="hover:text-pink-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:hello@johndesigner.com" className="hover:text-pink-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/80">hello@johndesigner.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75">
            © {currentYear} John Designer. All rights reserved.
          </p>
          <p className="text-sm opacity-75 mt-2 md:mt-0">
            Designed and built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
