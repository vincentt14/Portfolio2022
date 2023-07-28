import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Resume from "../pdf/CV_Vincent.pdf";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const refHead = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      const fixedNav: any = refHead.current?.offsetTop;

      if (window.pageYOffset > fixedNav) {
        refHead.current?.classList.add("navbar-fixed");
      } else {
        refHead.current?.classList.remove("navbar-fixed");
      }
    };
  }, []);

  const onToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div ref={refHead} className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 transition duration-150 ease-in-out">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer text-primary font-bold text-lg block py-6 hover:text-secondary">
                Vincent.
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button type="button" className={toggle === true ? "block absolute right-4 hamburger-active lg:hidden" : "block absolute right-4 lg:hidden"} onClick={onToggleClick}>
                <span className="origin-top-left hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="origin-bottom-left hamburger-line transition duration-300 ease-in-out"></span>
              </button>

              <nav
                className={
                  toggle === true
                    ? " absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:py-0"
                    : " hidden lg:block lg:static lg:bg-transparent lg:max-w-full"
                }
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-secondary" onClick={onToggleClick}>
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-secondary" onClick={onToggleClick}>
                      About Me
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="project" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-secondary" onClick={onToggleClick}>
                      Projects
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer text-primary text-base py-2 mx-8 flex group-hover:text-secondary" onClick={onToggleClick}>
                      Contact Me
                    </Link>
                  </li>
                  <li className="group">
                    <a href={Resume} download="Resume_Vincent" target="blank" className="text-primary text-base py-2 mx-8 flex group-hover:text-secondary" onClick={onToggleClick}>
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
