import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import myProject1 from "../assets/img/myProject1.png";
import myProject2 from "../assets/img/myProject2.png";
import myProject3 from "../assets/img/myProject3.png";

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Prep Clone",
      description:
        "I developed a language learning web application that allows users to build personalized study pathways and take proficiency tests. The project aimed to provide an effective learning experience and convenient administrative tools.",
      technology:
        "TypeScript, React.js, Next.js, Tailwind CSS, Swiper, Node.js, Express.js, MongoDB, Clerk, ZaloPay, Postman",
      year: "6/2024-9/2024",
      role: "Fullstack Developer",
      imgSrc: myProject1,
      githubLink: "https://github.com/LuanDHV/Prep-Clone-NextTS",
      demoLink: "",
    },
    {
      title: "Fashion E-commerce",
      description:
        "I built a fashion e-commerce web application using the MERN stack, following the MVC architecture, and integrating Redux Toolkit for state management. Additionally, I utilized Tailwind CSS for efficient styling and design. This project aimed to provide a great user experience and efficient administrative tools.",
      technology:
        "React.js, Redux Toolkit, Tailwind CSS, Node.js, Express.js, Mongodb, Nodemailer, Postman",
      year: "1/2024 - 4/2024",
      role: "Fullstack Developer",
      imgSrc: myProject2,
      githubLink: "https://github.com/LuanDHV/MERN-Stack-Project-Ecommerce",
      demoLink: "",
    },
    {
      title: "My Frontend Developer Portfolio",
      description:
        "This project built to introduce myself, my skills and completed projects. With a focus on simplicity, best user experience and aesthetics. Use appropriate colors and fonts to create a professional and easy to read workspace, it is also responsive for many devices.",
      technology:
        "Html, Css, Tailwind CSS, React.js, Node.js, Express.js, Nodemailer, Figma, Postman",
      year: "04/2024 - 05/2024",
      role: "Front-end Developer",
      imgSrc: myProject3,
      githubLink: "https://github.com/LuanDHV/My-Portfolio",
      demoLink: "",
    },
  ];

  const openLink = (url) => window.open(url, "_blank");

  return (
    <section id="projects" className="h-auto">
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
