import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center text-gray-600 hover:text-purple-600 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>

          {/* Project Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-lg opacity-90">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technologies Used */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Technologies Used</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <Tag size={16} className="mr-2 text-purple-600" />
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Completed</div>
                      <div className="font-medium text-gray-700">{project.completedAt}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-3 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-500">Category</div>
                      <div className="font-medium text-gray-700 capitalize">{project.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full p-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      <Github size={20} className="mr-3" />
                      <span>View Source Code</span>
                      <ExternalLink size={16} className="ml-auto" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-3" />
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Related Projects */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Related Projects</h3>
                <div className="space-y-3">
                  {projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/projects/${relatedProject.id}`}
                        className="block p-3 border border-gray-200 rounded-md hover:border-purple-300 hover:bg-purple-50 transition-all"
                      >
                        <div className="font-medium text-gray-800 text-sm">{relatedProject.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{relatedProject.description}</div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;