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
      <section
        id="about"
        data-aos="fade-down"
        className="flex h-auto items-center overflow-hidden xl:h-screen"
      >
        <div className="mx-auto my-24 flex h-auto w-4/5 flex-col items-center gap-5 xl:my-10 xl:flex-row">
          <div data-aos="fade-right" className="w-full">
            <div className="bebas-neue-font mb-5 text-5xl text-whiteColor xl:text-7xl">
              <div className="">Hi, I Am</div>
              <div className="">Doan Huynh Vu Luan.</div>
            </div>
            <span className="manrope-font text-base text-textColor xl:text-lg">
              I am a dedicated frontend developer actively seeking opportunities
              that align with my goal of becoming a fullstack developer. I am
              committed to making meaningful contributions and continuously
              expanding my skills.
            </span>
            <div className="my-10">
              <a
                href="#contact"
                className="h-[45px] w-[140px] rounded-full bg-primaryColor p-5 duration-300 hover:opacity-75 xl:h-[55px] xl:w-[180px]"
              >
                <span className="manrope-font text-sm font-bold uppercase text-black xl:text-base">
                  Contact Me
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2"
                  />
                </span>
              </a>

              <button
                className="ml-4 h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:h-14 xl:w-14 xl:text-base"
                onClick={handleLinkedInClick}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="ml-4 h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:h-14 xl:w-14 xl:text-base"
                onClick={handleGithubClick}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primaryColor"
                />
              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full">
            <img src={myAVT} alt="myAVT" className="rounded-2xl object-cover" />
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
    </>
  );
}
