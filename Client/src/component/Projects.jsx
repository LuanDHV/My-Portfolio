import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import myProject1 from "../assets/img/myProject1.png";
import myProject2 from "../assets/img/myProject2.png";
import myProject3 from "../assets/img/myProject3.png";
import myProject4 from "../assets/img/myProject4.png";

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Prep Clone",
      description:
        "A language learning web application that allows users to build personalized study pathways. The project aimed to provide an effective learning experience and convenient tools.",
      technology:
        "TypeScript, React.js, Next.js, NextUI, Tailwind CSS, Swiper, Node.js, Express.js, MongoDB, Clerk, ZaloPay Payment.",
      year: "6/2024-9/2024",
      role: "Fullstack Developer",
      imgSrc: myProject1,
      githubLink: "https://github.com/LuanDHV/Prep-Clone-NextTS",
      demoLink: "",
    },
    {
      title: "Fashion E-commerce",
      description:
        "A fashion e-commerce web application using the MERN stack, following the MVC architecture, and integrating Redux Toolkit for state management. Additionally, I utilized Tailwind CSS for efficient styling and design.",
      technology:
        "React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, Nodemailer.",
      year: "1/2024 - 4/2024",
      role: "Fullstack Developer",
      imgSrc: myProject2,
      githubLink: "https://github.com/LuanDHV/MERN-Stack-Project-Ecommerce",
      demoLink: "",
    },
    {
      title: "My Web Developer Portfolio",
      description:
        "A project built to introduce myself, my skills and completed projects. With a focus on simplicity, best user experience and aesthetics. Use appropriate colors and fonts to create a professional and easy to read workspace.",
      technology:
        "React.js, Tailwind CSS, Node.js, Express.js, Nodemailer, AOS.",
      year: "04/2024 - 05/2024",
      role: "Front-end Developer",
      imgSrc: myProject3,
      githubLink: "https://github.com/LuanDHV/My-Portfolio",
      demoLink: "",
    },
    {
      title: "To Do List",
      description:
        "A To-Do List application built to enhance user experience and performance. The app allows users to efficiently manage their tasks with a clean and intuitive interface, featuring Light/Dark mode for a customizable user experience.",
      technology:
        "TypeScript, React.js, RTK Query, Tailwind CSS, Node.js, Express.js.",
      year: "09/2024 - 09/2024",
      role: "Fullstack Developer",
      imgSrc: myProject4,
      githubLink: "https://github.com/LuanDHV/To-Do-List",
      demoLink: "",
    },
  ];

  const openLink = (url) => window.open(url, "_blank");

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="h-auto overflow-hidden"
    >
      <div className="mx-auto my-10 w-4/5">
        <div className="xl:w-[600px]">
          <div className="bebas-neue-font text-5xl text-whiteColor xl:text-7xl">
            Featured Projects
          </div>
          <div className="manrope-font mb-10 text-base text-textColor xl:text-lg">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </div>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="manrope-font mt-20 grid-cols-2 items-center text-pretty xl:grid"
          >
            <div className="mx-auto w-full rounded-lg bg-projectColor px-4 py-6">
              <img
                src={project.imgSrc}
                alt={`myProject${index + 1}`}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                {project.title}
              </div>
              <div className="mb-5 text-base text-textColor">
                {project.description}
              </div>
              <div className="mb-5 text-base text-textColor">
                Technology: {project.technology}
              </div>
              <div className="text-base font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Year</span>
                <span className="float-end text-textColor">{project.year}</span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-base">
                <span className="text-whiteColor">Role</span>
                <span className="float-end text-textColor">{project.role}</span>
              </div>
              <hr className="my-5 w-full text-lineColor opacity-30" />
              <div className="text-sm font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={() => openLink(project.demoLink)}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-base"
                  />
                </button>
                <button
                  className="float-end uppercase hover:opacity-75"
                  onClick={() => openLink(project.githubLink)}
                >
                  See On Github
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-base" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-full text-lineColor opacity-30" />
    </section>
  );
}
