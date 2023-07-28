import { Link } from "react-scroll";
import vincent from "../img/vincent.png";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <section id="home" className="pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div data-aos="fade-right" className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-medium text-primary md:text-xl">
              Hi, My Name is <span className="block font-bold text-secondary text-4xl mt-1 lg:text-5xl">Vincent.</span>
            </h1>
            <h2 className="font-light text-primary text-lg mb-5 lg:text-2xl mt-2">
              I am a{" "}
              <span style={{ color: "black", fontWeight: "500" }}>
                <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={70} delaySpeed={1500} words={["FrontEnd Engineer.", "Web Developer.", "React Developer.", "Laravel Developer.","JavaScript Developer.", "Programmer."]} />
              </span>
            </h2>

            <p className="text-slate-500 mb-10 max-w-md">
              "Keep Moving Forward Despite How Long It Take to Understand a Very Simple Thing."
              <span className="block text-secondary mt-1">- Norbertus Dewa Rucci.</span>
            </p>
            <button className="btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-20">
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                Get In Touch
              </Link>
            </button>
            <div data-aos="fade-up" className="grid grid-cols-2 gap-0  mb-6 max-w-md text-slate-500 border-black border-2 bg-white py-2 bayangan_field">
              <div className="grid grid-cols-3">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">12</div>
                <div className="col-2 col-span-2">
                  <p className="text-xs lg:text-base">Month</p>
                  <p className="text-xs lg:text-base">Experience</p>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">16</div>
                <div className="col-2 col-span-2">
                  <p className="text-xs lg:text-base">Projects</p>
                  <p className="text-xs lg:text-base">Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-full self-end px-4 lg:w-1/2 bg-white bayangan border-2 border-primary">
            <div className="mt-10 lg:right-0">
              <img data-src={vincent} alt="Vincent" className="lazyload max-w-full mx-auto alim border-2 border-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
