export default function Internships() {
  const internships = [
    {
      company: 'Trycae Industrial Engineering',
      description: `Completed a 1-month internship at Trycae Industrial Engineering focused on AR and AI.`,
      certificate: '/trycae.pdf',
    },
    {
      company: 'Codsoft',
      description: `Completed a 1-month online internship focused on UI/UX design fundamentals. Gained hands-on experience in Figma.`,
      certificate: '/CODSOFT_UIUX.pdf',
    },
    {
      company: 'Webstack Academy',
      description: `Completed a 2-month internship focused on full-stack web development using the MERN stack.`,
      certificate: '/wsa.pdf',
    }
  ]

  return (
    <section id="internships" className="py-16 sm:py-24 px-4 sm:px-8 bg-white dark:bg-gray-950">
      {/* 👆 Responsive spacing for all devices */}

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Internships
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition"
              data-aos="fade-up"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                {intern.company}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                {intern.description}
              </p>
              <a
                href={intern.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm sm:text-base rounded hover:bg-indigo-700 transition"
              >
                📄 View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
