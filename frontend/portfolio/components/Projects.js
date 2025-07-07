import { useState } from 'react'

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null)

  const projects = [
    {
      title: 'AR Learning App',
      description: 'An AR educational app using Unity + Firebase.',
      image: '/ar_app1.png',
      video: '/pdapp.mp4',
      github: 'https://github.com/AnishaAndavan/AR_Education_app'
    },
    {
      title: 'Santa Run 2D game',
      description: 'Simple 2D endless run game using Unity',
      image: '/santa_run.png',
      video: '/santa.mp4',
      github: 'https://github.com/AnishaAndavan/SANTA_RUN_2D'
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 bg-indigo-300 dark:bg-gray-900">
      {/* 👆 Responsive padding for all devices */}

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow relative"
              data-aos="fade-up"
            >
              <div
                className="cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setActiveVideo(project.video)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-base sm:text-lg opacity-0 group-hover:opacity-100 transition">
                  ▶️ Click to view demo
                </div>
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded hover:bg-indigo-700 transition"
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Video Overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-3xl px-4">
            <video controls autoPlay className="w-full rounded-xl shadow-lg max-h-[80vh]">
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 text-white text-xl bg-gray-800 bg-opacity-70 rounded-full p-2"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
