import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import myAVT from "../assets/img/myAVT.png";

export default function About() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/luandhv", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/LuanDHV", "_blank");
  };
  return (
    <>
      <section id="about" className="h-screen">
        <div className="mx-auto flex h-20 w-4/5 items-center justify-between xl:bg-blackColor">
          <span className="bebas-neue-font cursor-not-allowed text-3xl uppercase text-textColor xl:text-4xl">
            My Portfolio
          </span>

          <div className="inter-font float-end font-medium">
            <a
              href="#about"
              className="mx-4 cursor-pointer text-base text-textColor duration-300 hover:opacity-75"
            >
              About Me
            </a>
            <a
              href="#techstack"
              className="mx-4 cursor-pointer text-base text-textColor duration-300 hover:opacity-75"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="mx-4 cursor-pointer text-base text-textColor duration-300 hover:opacity-75"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="mx-4 cursor-pointer text-base text-textColor duration-300 hover:opacity-75"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mx-auto my-5 h-auto w-4/5 grid-cols-2 items-center gap-10 xl:grid">
          <div className="">
            <div className="bebas-neue-font text-5xl text-whiteColor xl:text-7xl">
              <div className="">Hi, I Am</div>
              <div className="">Doan Huynh Vu Luan.</div>
            </div>
            <span className="manrope-font text-base text-textColor xl:text-lg">
              A front-end developer passionate about building accessible and
              user friendly websites.
            </span>
            <div className="my-10">
              <button className="h-[45px] w-[140px] rounded-full bg-primaryColor duration-300 hover:opacity-75 xl:h-[55px] xl:w-[180px]">
                <span className="manrope-font text-sm font-bold uppercase text-black xl:text-base">
                  <a href="#contact">Contact Me</a>
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2"
                  />
                </span>
              </button>
              <button
                className="ml-4 h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:h-[54px] xl:w-[54px] xl:text-base"
                onClick={handleLinkedInClick}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="ml-4 h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:h-[54px] xl:w-[54px] xl:text-base"
                onClick={handleGithubClick}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primaryColor"
                />
              </button>
            </div>
          </div>
          <div className="">
            <img src={myAVT} alt="myAVT" className="rounded-2xl object-cover" />
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
    </>
  );
}
