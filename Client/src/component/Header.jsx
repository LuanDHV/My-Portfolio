export default function Header() {
  return (
    <>
      <div
        data-aos="fade-down"
        className="fixed z-50 w-full overflow-hidden bg-blackColor"
      >
        <div className="mx-auto flex h-20 w-4/5 items-center justify-between">
          <span className="bebas-neue-font cursor-not-allowed text-3xl uppercase text-textColor xl:text-4xl">
            My Portfolio
          </span>

          <div className="inter-font float-end hidden font-medium xl:block">
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
      </div>
    </>
  );
}
