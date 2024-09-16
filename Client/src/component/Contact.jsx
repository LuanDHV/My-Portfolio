import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myCV from "../assets/other/DoanHuynhVuLuanResume.pdf";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/luandhv", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/LuanDHV", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/naul.1406", "_blank");
  };

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
      toast.success("Cảm ơn đã liên hệ");
      // console.log("Form data:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
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
      <section id="contact" className="flex h-auto items-center xl:h-screen">
        <div className="mx-auto w-4/5 items-center xl:grid xl:grid-cols-2">
          <div className="">
            <div className="bebas-neue-font mt-10 text-5xl text-whiteColor xl:text-7xl">
              Let&apos;s Connect
            </div>
            <div className="my-5 text-base text-textColor">
              Say hello at
              <p className="ml-1 inline text-primaryColor">
                luandhv1406@gmail.com
              </p>
            </div>
            <div className="my-5 text-base text-textColor">
              For more infor, here&apos;s my
              <a
                href={myCV}
                download="DoanHuynhVuLuanResume.pdf"
                className="ml-1 text-primaryColor underline"
              >
                resume
              </a>
            </div>
            <div className="my-10 grid grid-cols-3 text-xl xl:flex xl:text-2xl">
              <button
                className="h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:h-14 xl:w-14 xl:text-base"
                onClick={handleLinkedInClick}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:ml-10 xl:h-14 xl:w-14 xl:text-base"
                onClick={handleGithubClick}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-primaryColor"
                />
              </button>
              <button
                className="h-12 w-12 rounded-full bg-buttonBlack duration-300 hover:opacity-75 xl:ml-10 xl:h-14 xl:w-14 xl:text-base"
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
              <label htmlFor="name" className="text-base text-textColor">
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-4 h-[45px] w-full rounded bg-projectColor px-4 text-base text-textColor outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="text-base text-textColor">
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-4 h-[45px] w-full rounded bg-projectColor px-4 text-base text-textColor outline-none"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-base text-textColor">
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
                className="mt-4 h-[150px] w-full rounded bg-projectColor p-4 text-base text-textColor outline-none"
              />
            </div>
            <button
              type="submit"
              className="manrope-font my-10 h-[55px] w-[140px] rounded-full bg-primaryColor text-base font-bold text-blackColor duration-300 hover:opacity-75 xl:mt-20"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
