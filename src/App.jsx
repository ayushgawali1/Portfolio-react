import Navbar from "./components/Navbar";
import Headers from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';

export default function App() {

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", 'dark')
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", 'light')
    }
  }, [isDark])

  return (
    <>
      <ToastContainer />
      <div className="scroll-smooth transition-all duration-300 dark:bg-darkTheme dark:text-white">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Headers isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Work isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </>
  );
}
