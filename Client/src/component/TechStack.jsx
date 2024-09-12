import iconHTML from "../assets/img/html.png";
import iconCSS from "../assets/img/css.png";
import iconJS from "../assets/img/javascript.png";
import iconTS from "../assets/img/ts.png";
import iconREACT from "../assets/img/react.png";
import iconNEXTJS from "../assets/img/nextjs.png";
import iconREDUX from "../assets/img/redux.png";
import iconGIT from "../assets/img/git.png";
import iconTAILWIND from "../assets/img/tailwind.png";
import iconSASS from "../assets/img/sass.png";
import iconANTD from "../assets/img/antd.png";
import iconMUI from "../assets/img/mui.png";
import iconNODEJS from "../assets/img/nodejs.png";
import iconMONGODB from "../assets/img/mongodb.png";
import iconMYSQL from "../assets/img/mysql.png";
import iconPOSTMAN from "../assets/img/postman.png";

export default function TechStack() {
  const icons = [
    { src: iconHTML, alt: "iconHTML" },
    { src: iconCSS, alt: "iconCSS" },
    { src: iconJS, alt: "iconJS" },
    { src: iconTS, alt: "iconTS" },
    { src: iconREACT, alt: "iconREACT" },
    { src: iconNEXTJS, alt: "iconNEXTJS" },
    { src: iconREDUX, alt: "iconREDUX" },
    { src: iconGIT, alt: "iconGIT" },
    { src: iconTAILWIND, alt: "iconTAILWIND" },
    { src: iconSASS, alt: "iconSASS" },
    { src: iconANTD, alt: "iconANTD" },
    { src: iconMUI, alt: "iconMUI" },
    { src: iconNODEJS, alt: "iconNODEJS" },
    { src: iconMONGODB, alt: "iconMONGODB" },
    { src: iconMYSQL, alt: "iconMYSQL" },
    { src: iconPOSTMAN, alt: "iconPOSTMAN" },
  ];

  return (
    <>
      <section id="techstack" className="flex h-auto items-center xl:h-screen">
        <div className="mx-auto grid w-4/5 xl:grid-cols-2">
          <div className="self-center">
            <div className="bebas-neue-font mt-10 text-5xl text-whiteColor xl:text-7xl">
              My Tech Stack
            </div>
            <div className="manrope-font text-base text-textColor xl:text-lg">
              Technologies I’ve been working with recently
            </div>
          </div>
          <div className="my-10 grid grid-rows-4 xl:my-20">
            {Array(4)
              .fill(0)
              .map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="mb-5 grid grid-cols-4 place-items-center xl:mb-10"
                >
                  {icons
                    .slice(rowIndex * 4, rowIndex * 4 + 4)
                    .map((icon, index) => (
                      <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="h-10 w-10 xl:h-20 xl:w-20"
                      />
                    ))}
                </div>
              ))}
          </div>
        </div>
      </section>
      <hr className="w-full text-lineColor opacity-30" />
    </>
  );
}
