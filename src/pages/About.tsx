import React from 'react';
import { Calendar, MapPin, GraduationCap, Award, Coffee, Code2 } from 'lucide-react';
import { experiences, education } from '../data/portfolio';
import myPhoto from '../assets/anmol.jpg';

const About = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                About Me
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate Computer Science student with a deep love for technology and innovation. 
                Currently pursuing my Bachelor's degree, I'm constantly exploring new technologies and 
                building projects that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                My journey in programming started in high school, and since then I've been fascinated 
                by the endless possibilities that code can unlock. I enjoy working on both frontend 
                and backend development, with a particular interest in AI and machine learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2 text-purple-600" />
                  <span>Jammu and Kashmir , Jammu, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2 text-purple-600" />
                  <span>Available for Internships</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={myPhoto}
                  alt="Anmol"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transform rotate-3 opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years Learning</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">8.79</div>
              <div className="text-gray-600">Current CGPA</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600">Hours of Coding</div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium">{edu.institution}</p>
                      {edu.gpa && (
                        <div className="flex items-center mt-2">
                          <Award size={16} className="mr-2 text-green-600" />
                          <span className="text-green-600 font-medium">CGPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mt-4 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;