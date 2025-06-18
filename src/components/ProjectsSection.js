import { useRef, useState } from 'react';

const ProjectsSection = () => {
  const scrollContainerRef = useRef(null);
  const [selectedType, setSelectedType] = useState('All');
  
  const projects = [
    {title: "Sica App",
      description: "Sica App is a personal project that showcases a full-stack application built with React, Node.js, and MongoDB. It features user authentication, data management, and a responsive design. This project demonstrates skills in modern web development, RESTful APIs, and database integration.",
      tags: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      image: `${process.env.PUBLIC_URL}/imgs/Sica-App.png`,
      demoUrl: "https://github.com/cariasj03/sica_backend",
      codeUrl: "https://github.com/cariasj03/sica_app",
      type: "web"
    },
    {
      title: "Tienda Virtual",
      description: "Tienda Virtual is a personal project that showcases an application platform built with Java and SQL using JPanel for UI. It features product listings, a shopping cart, and user authentication. This project is to demonstrate skills in Java programming, database management, and Object-Oriented Programming.",
      tags: ["Java", "SQL", "JPanel"],
      image: `${process.env.PUBLIC_URL}/imgs/Tienda Virtual.png`,
      detailsUrl: "https://bitbucket.org/bmoxomb/proyecto_poo/src/master/",
      type: "app"
    },
    {
      title: "EventXpress",
      description: "EventXpress is an ademic personal project developed. It is a modern web application designed to simplify the online ticket purchasing experience for events such as concerts, conferences, and festivals. This project demonstrates skills in full stack development, user experience design, and secure user management systems.",
      tags: ["C#", "JavaScript", "HTML", "CSS", "SQL", "Twilio","API"],
      image: `${process.env.PUBLIC_URL}/imgs/EventXpress.png`,
      detailsUrl: "https://dev.azure.com/attackOnCodee/",
      type: "web"
    },
    {
      title: "Secret number game",
      description: "This is a simple game where the user has to guess a secret number between 1 and 100. The game provides feedback on whether the guess is too high or too low, and it keeps track of the number of attempts.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: `${process.env.PUBLIC_URL}/imgs/Secret-number.png`,
      demoUrl: "#",
      codeUrl: "#",
      detailsUrl: "https://bmoxomb.github.io/game-secretNumber/",
      type: "web"
    },
    {
      title: "Secret Friend",
      description: "This is a simple web application that allows users to participate in a Secret Friend game. Users can draw names to find out who their Secret Friend is. The application uses JavaScript, HTML and CSS for the front-end.",
      tags: ["Python", "TensorFlow", "OpenCV"],
      image: `${process.env.PUBLIC_URL}/imgs/Secret-friend.png`,
      detailsUrl: "https://bmoxomb.github.io/secret-friend/",
      type: "web"
    },
    /*{
      title: "App Móvil",
      description: "Aplicación de tareas con sincronización en la nube",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://via.placeholder.com/400x250?text=Mobile+App",
      detailsUrl: "#",
      type: "mobile"
    }*/
  ];

  // Types of  proyects available
  const projectTypes = [
    { id: 'All', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'app', name: 'App' }
  ];

  // Filter projects based on selected type
  const filteredProjects = selectedType === 'All' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        
        {/* Filters per type */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex space-x-2 px-4 py-1 rounded-full bg-gray-100">
            {projectTypes.map((type) => {
              const count = type.id === 'All' 
                ? projects.length 
                : projects.filter(p => p.type === type.id).length;
              
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                    selectedType === type.id
                      ? 'bg-[#eba504] text-white'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {type.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="relative">
          {filteredProjects.length > 0 ? (
            <>
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-6 py-4 px-2"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {filteredProjects.map((project, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${
                      index === 0 && selectedType === 'All' ? 'border-2 ' : ''
                    }`}
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-yellow-50 text-[#eba504] text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {index === 0 && selectedType === 'All' && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-3">
                        {project.demoUrl ? (
                          <>
                            <a 
                              href={project.demoUrl}
                              className="flex-1 py-2 bg-[#eba504] text-white text-center rounded-lg hover:bg-[#eb4e04] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Front-end code
                            </a>
                            <a 
                              href={project.codeUrl}
                              className="flex-1 py-2 border bg-[#eba504]/50 text-white text-center rounded-lg hover:bg-[#eb4e04] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Back-end code
                            </a>
                          </>
                        ) : (
                          <a 
                            href={project.detailsUrl}
                            className="w-full py-2 bg-[#eba504] text-white text-center rounded-lg hover:bg-[#eb4e04] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No projects found for the selected category.
            </div>
          )}
        </div>
        
        {filteredProjects.length > 0 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(filteredProjects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 350 * 3,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

// DONE