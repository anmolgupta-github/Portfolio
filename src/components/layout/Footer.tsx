import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold">Anmol</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student passionate about building innovative solutions 
              and exploring the intersection of technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                  My Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Skills & Technologies
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/anmolgupta-github" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anmol3101" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/anmol_3101" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:alex.anmolgupta1478@gmail.com" 
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to collaboration and new opportunities
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Anmol. Made with <Heart size={16} className="mx-1 text-red-500" /> and lots of coffee
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;