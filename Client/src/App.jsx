import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import smoothScroll from "smooth-scroll";

import myAVT from "./assets/img/myAVT.png";
import iconHTML from "./assets/img/html.png";
import iconCSS from "./assets/img/css.png";
import iconJS from "./assets/img/javascript.png";
import iconREACT from "./assets/img/react.png";
import iconREDUX from "./assets/img/redux.png";
//import iconBOOTSTRAP from "./assets/img/bootstrap.png";
import iconANTD from "./assets/img/antd.png";
import iconMUI from "./assets/img/mui.png";
import iconTAILWIND from "./assets/img/tailwind.png";
import iconSASS from "./assets/img/sass.png";
import iconGIT from "./assets/img/git.png";
//import iconGITHUB from "./assets/img/github.png";
import iconFIGMA from "./assets/img/figma.png";
import iconPOSTMAN from "./assets/img/postman.png";
import iconNETLIFY from "./assets/img/netlify.png";
import iconNODEJS from "./assets/img/nodejs.png";
import iconMYSQL from "./assets/img/mysql.png";
import iconMONGODB from "./assets/img/mongodb.png";
import myProject1 from "./assets/img/myProject1.png";
import myProject2 from "./assets/img/myProject2.png";
import myProject3 from "./assets/img/myProject3.png";
import myCV from "./assets/other/CV-DoanHuynhVuLuan.pdf";

export default function App() {
  const [isMobile, setIsMobile] = useState(false); // Trạng thái để theo dõi xem thiết bị có phải là di động không
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/luandhv", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/LuanDHV", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/naul.1406", "_blank");
  };

  const handleGithubProject1Click = () => {
    window.open(
      "https://github.com/LuanDHV/TailwindCSS-NFT-Practice",
      "_blank"
    );
  };

  const handleDemoProject1Click = () => {
    window.open("https://nftsdesign.netlify.app/", "_blank");
  };

  const handleGithubProject2Click = () => {
    window.open(
      "https://github.com/LuanDHV/MERN-Stack-Project-Ecommerce",
      "_blank"
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/send-email", formData);
      toast.success("Email sent successfully");
      console.log("Form data:", formData); // Kiểm tra dữ liệu trong form
      // Reset form bằng cách đặt lại State
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    smoothScroll('a[href*="#"]', {
      speed: 800, // Tốc độ cuộn (milliseconds)
      speedAsDuration: true, // Sử dụng tốc độ như là thời gian của cuộn
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

  useEffect(() => {
    // Hàm kiểm tra xem thiết bị có phải là di động không
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Đặt trạng thái isMobile thành true nếu chiều rộng cửa sổ nhỏ hơn hoặc bằng 768px (điều chỉnh theo nhu cầu)
    };

    // Chạy hàm checkIsMobile khi component được mount và khi có sự kiện resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section>
        <div
          className="
            w-4/5 h-[75px] mx-auto leading-[75px] 
            xl:h-[95px] xl:bg-blackColor xl:leading-[95px]
            "
        >
          <span className="bebas-neue-font text-[28px] xl:text-[32px] text-textColor uppercase cursor-not-allowed">
            My Portfolio
          </span>
          {/* Render điều kiện: Chỉ hiển thị biểu tượng trên điện thoại di động */}
          {isMobile ? (
            <span className="text-textColor text-[24px] float-end cursor-pointer">
              {/* <FontAwesomeIcon icon={faBars} /> */}
            </span>
          ) : (
            <div className="inter-font font-medium float-end ">
              <a
                href="#techstack"
                className="mx-4 text-textColor text-[16px] cursor-pointer hover:opacity-75 duration-300"
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                className="mx-4 text-textColor text-[16px] cursor-pointer hover:opacity-75 duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="mx-4 text-textColor text-[16px] cursor-pointer hover:opacity-75 duration-300"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </section>
      <section>
        <div
          className="
            w-4/5 h-auto mx-auto my-10
            xl:grid grid-cols-2 xl:place-items-center
            "
        >
          <div className="">
            <div className="bebas-neue-font text-whiteColor text-[40px] xl:text-[100px]">
              <div className="">Hi, I Am</div>
              <div className="">Doan Huynh Vu Luan.</div>
            </div>
            <span className="manrope-font text-textColor text-[16px] xl:text-[18px]">
              A front-end developer passionate about building accessible and
              user friendly websites.
            </span>
            <div className="my-10">
              <button
                className="
                w-[150px] h-[45px] rounded-full bg-primaryColor hover:opacity-75 duration-300
                xl:w-[180px] xl:h-[55px]
                "
              >
                <span
                  className="
                  manrope-font text-[14px] font-bold text-black uppercase 
                  xl:text-[16px]"
                >
                  <a href="#contact">Contact Me</a>
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2"
                  />
                </span>
              </button>
              <button
                className="
                  w-[48px] h-[48px] ml-4 rounded-full bg-buttonBlack hover:opacity-75 duration-300
                  xl:w-[54px] xl:h-[54px] xl:text-[16px]
                  "
                onClick={handleLinkedInClick}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="
                  w-[48px] h-[48px] ml-4 rounded-full bg-buttonBlack hover:opacity-75 duration-300
                  xl:w-[54px] xl:h-[54px] xl:text-[16px]
                  "
                onClick={handleGithubClick}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primaryColor"
                />
              </button>
            </div>
          </div>

          <div className="mb-10">
            <img
              src={myAVT}
              alt="myAVT"
              className="
                w-full h-full object-cover rounded-lg
                xl:w-[600px] xl:h-[800px]
                "
            />
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
      <section id="techstack">
        <div
          className="
          w-4/5 h-auto mx-auto 
          xl:grid xl:grid-cols-2
          "
        >
          <div className="self-center">
            <div
              className="
              bebas-neue-font mt-10 text-[40px] text-whiteColor
              xl:text-[70px]
              "
            >
              My Tech Stack
            </div>
            <div
              className="
              manrope-font text-[16px] text-textColor
              xl:text-[18px]
              "
            >
              Technologies I’ve been working with recently
            </div>
          </div>
          <div
            className="
            grid grid-rows-4 my-10
            xl:my-20
            "
          >
            <div
              className="
              mb-5 grid grid-cols-4 place-items-center
              xl:mb-10
              "
            >
              <img
                src={iconHTML}
                alt="iconHTML"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconCSS}
                alt="iconCSS"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconJS}
                alt="iconJS"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconREACT}
                alt="iconREACT"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
            </div>
            <div
              className="
              mb-5 grid grid-cols-4 place-items-center
              xl:mb-10
              "
            >
              <img
                src={iconREDUX}
                alt="iconREDUX"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconGIT}
                alt="iconGIT"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconTAILWIND}
                alt="iconTAILWIND"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconSASS}
                alt="iconSASS"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
            </div>
            <div
              className="
              mb-5 grid grid-cols-4 place-items-center
              xl:mb-10
              "
            >
              <img
                src={iconANTD}
                alt="iconANTD}"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconMUI}
                alt="iconMUI"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconNODEJS}
                alt="iconNODEJS"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconMONGODB}
                alt="iconMONGODB"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
            </div>
            <div
              className="
              mb-5 grid grid-cols-4 place-items-center
              xl:mb-10
              "
            >
              <img
                src={iconMYSQL}
                alt="iconMYSQL"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconFIGMA}
                alt="iconFIGMA"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconPOSTMAN}
                alt="iconPOSTMAN"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
              <img
                src={iconNETLIFY}
                alt="iconNETLIFY"
                className="
                w-[35x] h-[35px] 
                xl:w-[80px] xl:h-[80px]
                "
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
      <section id="projects">
        <div className="w-4/5 h-auto mx-auto my-10">
          <div className="xl:w-[600px]">
            <div
              className="
              bebas-neue-font text-[40px] text-whiteColor
              xl:text-[70px]
              "
            >
              Featured Projects
            </div>
            <div
              className="
                manrope-font mb-10 text-[16px] text-textColor
                xl:text-[18px]
                "
            >
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </div>
          </div>
          <div
            className="
              manrope-font text-pretty
              xl:grid grid-cols-2
              "
          >
            <div
              className="
                w-full h-[350px] mx-auto px-4 py-6 rounded-lg bg-projectColor
                xl:p-10 xl:h-[600px]
                "
            >
              <img
                src={myProject1}
                alt="myProject1"
                className="
                  w-full h-full object-cover object-top rounded-t-lg
                  xl:rounded-lg xl:h-full xl:mx-auto
                  "
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                NFT Landing Page
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                This project build a landing page from the NFTs design. Focus on
                uniqueness using the right colors and fonts creates a
                professional and easy to read workspace, and it also
                demonstrates my abilities with tailwind
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                Technology: Html, Css, Tailwind, Figma.
              </div>
              <div className="text-[16px] font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Year</span>
                <span className="text-textColor float-end">11/2023</span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Role</span>
                <span className="text-textColor float-end">
                  Front-end Developer
                </span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[14px] font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject1Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-[16px]"
                  />
                </button>
                <button
                  className="uppercase hover:opacity-75 float-end"
                  onClick={handleGithubProject1Click}
                >
                  See On Github
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="ml-2 text-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="
              manrope-font mt-20 text-pretty 
              xl:grid grid-cols-2
              "
          >
            <div
              className="
                w-full h-[350px] mx-auto px-4 py-6 rounded-lg bg-projectColor
                xl:p-10 xl:h-[600px]
                "
            >
              <img
                src={myProject2}
                alt="myProject2"
                className="
                  w-full h-full object-cover object-top rounded-t-lg
                  xl:rounded-lg xl:h-full xl:mx-auto
                  "
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                Fashion E-commerce
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                <p>
                  This project is built on the theme of e-commerce fashion to
                  provide full user interaction features such as viewing,
                  ordering, payment, confirmation, etc. In addition, the project
                  also provides other Features help administrators conveniently
                  manage
                </p>
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                ReactJS, Redux Toolkit, Tailwind, NodeJS, ExpressJS, Mongodb,
                Postman, etc.
              </div>

              <div className="text-[16px] font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Year</span>
                <span className="text-textColor float-end">
                  1/2024 - 4/2024
                </span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Role</span>
                <span className="text-textColor float-end">
                  Fullstack Developer
                </span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[14px] font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject2Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-[16px]"
                  />
                </button>
                <button
                  className="uppercase hover:opacity-75 float-end"
                  onClick={handleGithubProject2Click}
                >
                  See On Github
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="ml-2 text-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="
              manrope-font mt-20 text-pretty 
              xl:grid grid-cols-2
              "
          >
            <div
              className="
                w-full h-[350px] mx-auto px-4 py-6 rounded-lg bg-projectColor
                xl:p-10 xl:h-[600px]
                "
            >
              <img
                src={myProject3}
                alt="myProject3"
                className="
                  w-full h-full object-cover object-top rounded-t-lg
                  xl:rounded-lg xl:h-full xl:mx-auto
                  "
              />
            </div>
            <div className="xl:p-10">
              <div className="my-5 text-[24px] font-medium text-whiteColor">
                My Frontend Developer Portfolio
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                This project built to introduce myself, my skills and completed
                projects. With a focus on simplicity, best user experience and
                aesthetics. Use appropriate colors and fonts to create a
                professional and easy to read workspace, it is also responsive
                for many devices.
              </div>
              <div className="mb-5 text-[16px] text-textColor">
                Technology: Html, Css, Tailwind, ReactJS, NodeJS, ExpressJS,
                Nodemailer, Figma, Postman.
              </div>
              <div className="text-[16px] font-semibold uppercase text-whiteColor">
                Project Info
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Year</span>
                <span className="text-textColor float-end">
                  04/2024 - 05/2024
                </span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[16px]">
                <span className="text-whiteColor">Role</span>
                <span className="text-textColor float-end">
                  Front-end Developer
                </span>
              </div>
              <hr className="w-full my-5 text-lineColor opacity-30" />
              <div className="text-[14px] font-bold text-primaryColor">
                <button
                  className="uppercase hover:opacity-75"
                  onClick={handleDemoProject3Click}
                >
                  Live Demo
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-2 text-[16px]"
                  />
                </button>
                <button
                  className="uppercase hover:opacity-75 float-end"
                  onClick={handleGithubProject3Click}
                >
                  See On Github
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="ml-2 text-[16px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
      <section id="contact">
        <div className="w-4/5 h-auto mx-auto xl:grid xl:grid-cols-2">
          <div className="">
            <div
              className="
              bebas-neue-font mt-10 text-[40px] text-whiteColor
              xl:text-[70px]
              "
            >
              Let&apos;s Connect
            </div>
            <div className="my-5 text-[16px] text-textColor">
              Say hello at
              <p className="inline ml-1 text-primaryColor">
                luandhv1406@gmail.com
              </p>
            </div>
            <div className="my-5 text-[16px] text-textColor">
              For more infor, here&apos;s my
              <a
                href={myCV}
                download="CV-Doan Huynh Vu Luan.pdf"
                className="underline ml-1 text-primaryColor"
              >
                resume
              </a>
            </div>
            <div
              className="
              grid grid-cols-3
              my-10 text-[20px]
              xl:flex xl:text-[25px]
              "
            >
              <button
                className="
                w-[48px] h-[48px] rounded-full bg-buttonBlack hover:opacity-75 duration-300
                xl:w-[54px] xl:h-[54px] xl:text-[16px]
                "
                onClick={handleLinkedInClick}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="
                w-[48px] h-[48px] rounded-full bg-buttonBlack hover:opacity-75 duration-300
                xl:w-[54px] xl:h-[54px] xl:text-[16px] xl:ml-10
                "
                onClick={handleGithubClick}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="
                w-[48px] h-[48px] rounded-full bg-buttonBlack hover:opacity-75 duration-300
                xl:w-[54px] xl:h-[54px] xl:text-[16px] xl:ml-10
                "
                onClick={handleFacebookClick}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-primaryColor"
                />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="manrope-font xl:p-10">
            <div>
              <label htmlFor="name" className="text-[16px] text-textColor">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[45px] mt-4 px-4 rounded text-[16px] text-textColor bg-projectColor outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-[16px] text-textColor">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[45px] mt-4 px-4 rounded text-[16px] text-textColor bg-projectColor outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-[16px] text-textColor">
                Message:
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                cols="50"
                className="w-full h-[150px] mt-4 p-4 rounded text-[16px] text-textColor bg-projectColor outline-none"
              />
            </div>
            <button
              type="submit"
              className="
              manrope-font font-bold my-10 w-[140px] h-[55px] text-[16px] text-blackColor bg-primaryColor rounded-full hover:opacity-75 duration-300
              xl:mt-20
              "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      {isVisible && (
        <button
          id="scrollToTopButton"
          onClick={scrollToTop}
          className="w-[48px] h-[48px] fixed text-lg bg-buttonBlack  text-primaryColor bottom-10 right-5 rounded-full hover:opacity-70 duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
}
