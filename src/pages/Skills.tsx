import React, { useState } from 'react';
import { Code, BookOpen, Wrench, Languages, ExternalLink, Trophy } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const languageSkills = skills.filter(skill => skill.category === 'languages');
  const frameworkSkills = skills.filter(skill => skill.category === 'frameworks');
  const toolSkills = skills.filter(skill => skill.category === 'tools');
  const courseworkSkills = skills.filter(skill => skill.category === 'coursework');

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's an overview of my technical skills and knowledge areas.
            </p>
          </div>

          {/* Skills Sections */}
          <div className="space-y-12">
            {/* Languages */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Code size={32} className="text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {languageSkills.map((skill) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="font-medium text-gray-700">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Frameworks & Libraries</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {frameworkSkills.map((skill) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl mb-2">⚛️</div>
                    <div className="font-medium text-gray-700">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Wrench size={32} className="text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Databases & Tools</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {toolSkills.map((skill) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl mb-2">🛠️</div>
                    <div className="font-medium text-gray-700">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Languages size={32} className="text-orange-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-800">Coursework</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {courseworkSkills.map((skill) => (
                  <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="font-medium text-gray-700">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="text-center mt-12 ">
            <div className="flex items-center justify-center mb-6 " >
              <Trophy size={32} className="text-yellow-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Coding Profiles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="https://www.naukri.com/code360/profile/anmolcode"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">🥷</div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-orange-600 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">CodeNinja</h3>
                <p className="text-gray-600 text-sm">Solving coding challenges and improving problem-solving skills</p>
              </a>
              <a
                href="https://leetcode.com/u/anmollcode/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">💻</div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-yellow-600 transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">LeetCode</h3>
                <p className="text-gray-600 text-sm">Practicing algorithms and data structures problems</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;