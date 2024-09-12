import iconHTML from "../assets/img/html.png";
import iconCSS from "../assets/img/css.png";
import iconJS from "../assets/img/javascript.png";
import iconREACT from "../assets/img/react.png";
import iconREDUX from "../assets/img/redux.png";
import iconANTD from "../assets/img/antd.png";
import iconMUI from "../assets/img/mui.png";
import iconTAILWIND from "../assets/img/tailwind.png";
import iconSASS from "../assets/img/sass.png";
import iconGIT from "../assets/img/git.png";
import iconFIGMA from "../assets/img/figma.png";
import iconPOSTMAN from "../assets/img/postman.png";
import iconNETLIFY from "../assets/img/netlify.png";
import iconNODEJS from "../assets/img/nodejs.png";
import iconMYSQL from "../assets/img/mysql.png";
import iconMONGODB from "../assets/img/mongodb.png";

export default function TechStack() {
  return (
    <>
      <section id="techstack" className="h-auto xl:h-screen">
        <div className="mx-auto w-4/5 xl:grid xl:grid-cols-2">
          <div className="self-center">
            <div className="bebas-neue-font mt-10 text-5xl text-whiteColor xl:text-7xl">
              My Tech Stack
            </div>
            <div className="manrope-font text-base text-textColor xl:text-lg">
              Technologies I’ve been working with recently
            </div>
          </div>
          <div className="my-10 grid grid-rows-4 xl:my-20">
            <div className="mb-5 grid grid-cols-4 place-items-center xl:mb-10">
              <img
                src={iconHTML}
                alt="iconHTML"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconCSS}
                alt="iconCSS"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconJS}
                alt="iconJS"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconREACT}
                alt="iconREACT"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
            </div>
            <div className="mb-5 grid grid-cols-4 place-items-center xl:mb-10">
              <img
                src={iconREDUX}
                alt="iconREDUX"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconGIT}
                alt="iconGIT"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconTAILWIND}
                alt="iconTAILWIND"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconSASS}
                alt="iconSASS"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
            </div>
            <div className="mb-5 grid grid-cols-4 place-items-center xl:mb-10">
              <img
                src={iconANTD}
                alt="iconANTD}"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconMUI}
                alt="iconMUI"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconNODEJS}
                alt="iconNODEJS"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconMONGODB}
                alt="iconMONGODB"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
            </div>
            <div className="mb-5 grid grid-cols-4 place-items-center xl:mb-10">
              <img
                src={iconMYSQL}
                alt="iconMYSQL"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconFIGMA}
                alt="iconFIGMA"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconPOSTMAN}
                alt="iconPOSTMAN"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
              <img
                src={iconNETLIFY}
                alt="iconNETLIFY"
                className="h-10 w-10 xl:h-20 xl:w-20"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
    </>
  );
}
