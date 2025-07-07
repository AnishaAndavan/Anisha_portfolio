import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 py-10 px-4 sm:px-6">
      {/* 👆 Responsive horizontal padding */}

      <div className="max-w-5xl mx-auto text-center text-gray-800 dark:text-gray-300 space-y-6">
        {/* 👆 Increased space-y to improve spacing on mobile */}

        {/* Contact Info */}
        <div className="space-y-1">
          <p className="text-lg sm:text-xl font-semibold">Contact Me</p>
          <p className="text-sm sm:text-base">
            Email: <a href="mailto:anisha@example.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">anishaandavan503@gmail.com</a>
          </p>
          <p className="text-sm sm:text-base">
            Phone: <a href="tel:+919876543210" className="hover:underline">+91 93632 55203</a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 text-xl sm:text-2xl mt-4">
          {/* 👆 Used gap instead of space-x for better spacing control */}
          <a
            href="http://www.linkedin.com/in/anishas-64b941270"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/anisha_senthilandavan_05?igsh=MWxoaDI0YXdienA3ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/AnishaAndavan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-6">
          © {new Date().getFullYear()} Anisha S. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
