import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import smoothScroll from "smooth-scroll";
import About from "./component/About";
import TechStack from "./component/TechStack";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

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
