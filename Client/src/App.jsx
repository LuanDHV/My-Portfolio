import AOS from "aos";
import "aos/dist/aos.css";
import smoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import TechStack from "./component/TechStack";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Header from "./component/Header";
import About from "./component/About";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    smoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  // AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      {isVisible && (
        <button
          id="scrollToTopButton"
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 h-12 w-12 rounded-full bg-buttonBlack text-lg text-primaryColor duration-300 ease-in-out hover:opacity-70"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
}
