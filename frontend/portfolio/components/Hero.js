'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-indigo-100 dark:bg-black px-4 py-20 sm:py-32"
    >
      <div className="max-w-4xl mx-auto text-center px-2">
        {/* Responsive image blob + profile */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mb-10">
          <div className="absolute inset-0 rounded-[35%] bg-gradient-to-tr from-indigo-400 to-pink-400 dark:from-indigo-700 dark:to-purple-700 animate-pulse z-0 blur-lg"></div>

          <img
            src="/profile.jpg"
            alt="Anisha S"
            className="relative w-full h-full object-cover rounded-[35%] shadow-xl border-4 border-white dark:border-gray-800 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center flex-wrap">
          Hi, I’m&nbsp;
          <span className="flex gap-1 text-indigo-600 dark:text-indigo-400">
            {"Anisha".split("").map((char, i) => (
              <span
                key={i}
                className="animate-pop-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>

        {/* Typewriter Responsive */}
        <h2 className="text-lg sm:text-2xl mt-2 text-indigo-600 dark:text-indigo-400 font-medium">
          <Typewriter
            words={['Computer Science Engineer', 'UI/UX Designer', 'Front end developer', 'AR enthusiast']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>
    </section>
  )
}
