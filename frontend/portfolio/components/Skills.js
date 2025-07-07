export default function Skills() {
  const skills = [
    { name: 'C', icon: '/C.jpg' },
    { name: 'C++', icon: '/C++.jpg' },
    { name: 'HTML', icon: '/html.jpg' },
    { name: 'CSS', icon: '/css.jpg' },
    { name: 'Unity', icon: '/unity.jpg' },
    { name: 'Figma', icon: '/figma.jpg' },
    { name: 'UI/UX', icon: '/uiux.jpg' },
    { name: 'MongoDB', icon: '/mongodb.jpg' },
    { name: 'NEXT.js', icon: '/nextjs.jpg' },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 bg-indigo-100 dark:bg-black">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center shadow hover:scale-105 transition"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-2 object-contain"
              />
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
