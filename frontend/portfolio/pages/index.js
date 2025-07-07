import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Internships from '../components/Internships'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anisha S | Portfolio</title>
        <meta name="description" content="AR/VR Developer Portfolio" />
      </Head>

      <div className="bg-white text-black dark:bg-black dark:text-white transition-all duration-500 min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internships />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
