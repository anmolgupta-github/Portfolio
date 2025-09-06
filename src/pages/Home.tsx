import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Sparkles, Zap } from 'lucide-react';
import { projects } from '../data/portfolio';
import myphoto from '../assets/anmol1.jpg';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={myphoto}
                alt="Alex Chen"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Anmol
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-4 font-light">
              Computer Science Student & Full-Stack Developer
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions with modern technologies. 
              Currently exploring AI, machine learning, and web development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/anmolgupta-github"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anmol3101"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:anmolgupta1478@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I'm a third-year Computer Science student at MS Ramaiah Institute of  Technology, 
              passionate about creating innovative solutions through code. My journey spans 
              web development,data structures and algorithms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={32} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Programming</h3>
                <p className="text-gray-600 text-sm">Building applications with various programming languages</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={32} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Learning</h3>
                <p className="text-gray-600 text-sm">Continuously learning new technologies and concepts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Problem Solving</h3>
                <p className="text-gray-600 text-sm">Turning complex challenges into elegant solutions</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Learn more about me
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600">
                Some of my recent work that I'm particularly proud of
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded text-xs font-medium">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      View Project
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg inline-flex items-center"
              >
                View All Projects
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Technical Skills</h2>
            <p className="text-lg text-gray-600 mb-12">
              Technologies and tools I work with
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['C', 'C++', 'Python', 'JavaScript', 'React.js', 'Node.js'].map((skill) => (
                <div key={skill} className="bg-gray-50 hover:bg-purple-50 p-4 rounded-lg transition-colors group">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                    {skill}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/skills"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                View all skills
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-purple-100 mb-8">
              I'm always excited to collaborate on interesting projects and learn new things.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Link>
              <a
                href="mailto:alex.chen@email.com"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;