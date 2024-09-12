import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import myProject1 from "../assets/img/myProject1.png";
import myProject2 from "../assets/img/myProject2.png";
import myProject3 from "../assets/img/myProject3.png";

export default function Projects() {
  const handleGithubProject1Click = () => {
    window.open(
      "https://github.com/LuanDHV/TailwindCSS-NFT-Practice",
      "_blank",
    );
  };

  const handleDemoProject1Click = () => {
    window.open("https://nftsdesign.netlify.app/", "_blank");
  };

  const handleGithubProject2Click = () => {
    window.open(
      "https://github.com/LuanDHV/MERN-Stack-Project-Ecommerce",
      "_blank",
    );
  };

  const handleDemoProject2Click = () => {
    window.open("https://nemfashion.netlify.app/", "_blank");
  };

  const handleGithubProject3Click = () => {
    window.open("https://github.com/LuanDHV/My-Portfolio", "_blank");
  };

  const handleDemoProject3Click = () => {
    window.open("https://naulportfolio.netlify.app/", "_blank");
  };
  return (
    <>
      <section id="projects" className="h-auto">
        <div className="mx-auto my-10 w-4/5">
          <div className="xl:w-[600px]">
            <div className="bebas-neue-font text-5xl text-whiteColor xl:text-7xl">
              Featured Projects
            </div>
            <div className="manrope-font mb-10 text-base text-textColor xl:text-lg">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </div>
          </div>
          <div className="manrope-font grid-cols-2 text-pretty xl:grid">
            <div className="mx-auto h-[350px] w-full rounded-lg bg-projectColor px-4 py-6 xl:h-[600px] xl:p-10">
              <img
                src={myProject1}
                alt="myProject1"
                className="h-full w-full rounded-t-lg object-cover object-top xl:mx-auto xl:h-full xl:rounded-lg"
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                NFT Landing Page
              </div>
              <div className="mb-5 text-base text-textColor">
                This project build a landing page from the NFTs design. Focus on
                uniqueness using the right colors and fonts creates a
                professional and easy to read workspace, and it also
                demonstrates my abilities with tailwind
              </div>
              <div className="mb-5 text-base text-textColor">
                Technology: Html, Css, Tailwind, Figma.
              </div>
              <div className="text-base font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Year</span>
                <span className="float-end text-textColor">11/2023</span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Role</span>
                <span className="float-end text-textColor">
                  Front-end Developer
                </span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-sm font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject1Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-base"
                  />
                </button>
                <button
                  className="float-end uppercase hover:opacity-75"
                  onClick={handleGithubProject1Click}
                >
                  See On Github
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </div>
          <div className="manrope-font mt-20 grid-cols-2 text-pretty xl:grid">
            <div className="mx-auto h-[350px] w-full rounded-lg bg-projectColor px-4 py-6 xl:h-[600px] xl:p-10">
              <img
                src={myProject2}
                alt="myProject2"
                className="h-full w-full rounded-t-lg object-cover object-top xl:mx-auto xl:h-full xl:rounded-lg"
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                Fashion E-commerce
              </div>
              <div className="mb-5 text-base text-textColor">
                <p>
                  This project is built on the theme of e-commerce fashion to
                  provide full user interaction features such as viewing,
                  ordering, payment, confirmation, etc. In addition, the project
                  also provides other Features help administrators conveniently
                  manage
                </p>
              </div>
              <div className="mb-5 text-base text-textColor">
                ReactJS, Redux Toolkit, Tailwind, NodeJS, ExpressJS, Mongodb,
                Postman, etc.
              </div>

              <div className="text-base font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Year</span>
                <span className="float-end text-textColor">
                  1/2024 - 4/2024
                </span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Role</span>
                <span className="float-end text-textColor">
                  Fullstack Developer
                </span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-sm font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject2Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-base"
                  />
                </button>
                <button
                  className="float-end uppercase hover:opacity-75"
                  onClick={handleGithubProject2Click}
                >
                  See On Github
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </div>
          <div className="manrope-font mt-20 grid-cols-2 text-pretty xl:grid">
            <div className="mx-auto h-[350px] w-full rounded-lg bg-projectColor px-4 py-6 xl:h-[600px] xl:p-10">
              <img
                src={myProject3}
                alt="myProject3"
                className="h-full w-full rounded-t-lg object-cover object-top xl:mx-auto xl:h-full xl:rounded-lg"
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                My Frontend Developer Portfolio
              </div>
              <div className="mb-5 text-base text-textColor">
                This project built to introduce myself, my skills and completed
                projects. With a focus on simplicity, best user experience and
                aesthetics. Use appropriate colors and fonts to create a
                professional and easy to read workspace, it is also responsive
                for many devices.
              </div>
              <div className="mb-5 text-base text-textColor">
                Technology: Html, Css, Tailwind, ReactJS, NodeJS, ExpressJS,
                Nodemailer, Figma, Postman.
              </div>
              <div className="text-base font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Year</span>
                <span className="float-end text-textColor">
                  04/2024 - 05/2024
                </span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Role</span>
                <span className="float-end text-textColor">
                  Front-end Developer
                </span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-sm font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject3Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-base"
                  />
                </button>
                <button
                  className="float-end uppercase hover:opacity-75"
                  onClick={handleGithubProject3Click}
                >
                  See On Github
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full text-lineColor opacity-30" />
      </section>
    </>
  );
}
