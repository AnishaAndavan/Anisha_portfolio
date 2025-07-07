import '../styles/globals.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import AOS from 'aos';
import { setInitialTheme } from '../utils/theme';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 🌓 Set theme on first load (dark/light mode)
    setInitialTheme();

    // ✨ Initialize AOS for scroll animations
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {/* Main App Component */}
      <Component {...pageProps} />

      {/* 🔔 Toast Container for alerts */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
