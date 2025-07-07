export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 bg-indigo-300 dark:bg-gray-900">
      {/* 👆 Adjusted padding for mobile & larger screens */}

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
          Hello! I'm Anisha S, a passionate and curious tech enthusiast who loves building,
          designing, and exploring. I enjoy working on innovative ideas, solving real-world
          problems, and learning new tools and technologies along the way.
          <br /><br />
          Over time, I've worked on diverse projects that helped me grow as a problem solver,
          team player, and lifelong learner. I enjoy blending logic with creativity, and I’m always
          open to exploring new domains — from design to development, and everything in between.
          Outside of coding, you’ll find me diving into programming, experimenting with UI/UX concepts.
        </p>

        {/* Resume Buttons - Responsive Stack */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto text-sm sm:text-base"
          >
            📄 Download Resume
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto text-sm sm:text-base"
          >
            Preview Resume
          </a>
        </div>
      </div>
    </section>
  )
}
