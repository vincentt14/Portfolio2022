import { useState } from "react";
import UMN from "../img/experience/UMN.png";
import dicodingTrans from "../img/experience/dicoding-trans.png";
import udemy from "../img/experience/udemy.png";
// import fga from "../img/experience/fga.png";
import BackEndSkills from "../components/BackEndSkills";
import FrontEndSkills from "../components/FrontEndSkills";
import OtherSkills from "../components/OtherSkills";
import Swal from "sweetalert2";
import dataExpert from "../utils/data-expert";

const AboutMePage = () => {
  const [skills, setSkills] = useState(1);

  const onClickFront = () => {
    setSkills(1);
  };

  const onClickBack = () => {
    setSkills(2);
  };

  const onClickOther = () => {
    setSkills(3);
  };

  const onLinkClickedGitHub = () => {
    Swal.fire({
      title: "Visit My GitHub🛰️",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href="https://github.com/vincentt14" target="blank" >Open it in new tab!!🔥</a>`,
      icon: "info",
    });
  };

  const onLinkClickedCertif = () => {
    Swal.fire({
      title: "View all my certificate🏆",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href="https://www.linkedin.com/in/vincent-240775185/details/certifications/" target="blank" >Open it in new tab!!🔥</a>`,
      icon: "warning",
    });
  };

  const onLinkClickedDiaCare = () => {
    Swal.fire({
      title: "View my thesis project🔥",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href="https://diacare.site/" target="blank" >Open it in new tab!!🔥</a>`,
      icon: "warning",
    });
  };

  const onLinkClickedExpert = (link: string) => {
    Swal.fire({
      title: "Go to Credential Page💳",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href=${link} target="blank" >Open it in new tab!!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <section id="about" className="pb-16 pt-32 lg:pb-28 bg-[#f2f6fc]">
      <div className="container">
        <div data-aos="fade-right" className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <h4 className="font-bold uppercase text-secondary text-lg mb-3">About Me</h4>
            <h2 className="font-bold  text-primary text-3xl mb-2 max-w-md lg:text-4xl">Who Am I?</h2>
            <hr className="bg-secondary border-none h-1 w-12 mb-5 mt-0 flex aling-items-center" />
            <p className="font-medium font-mono text-base max-w-xl lg:text-lg text-justify">Hello! My name is Vincent, a Web Developer based in Indonesia, Pontianak.</p>
            <br />
            <p className="font-medium font-mono text-primary text-base max-w-xl lg:text-lg text-justify">
              I am an informatics student that likes to create websites which focuses on front-end using React.js, i can build fullstack web too using Laravel. And also someone who has a high motivation and passion in the studies of learning or building dynamic and interactive websites.
            </p>
            <br />
            {/* <p className="font-medium font-mono text-slate-500 text-base max-w-xl mb-10 lg:text-lg">I'm currently active in contributing <span className="text-primary">Fresh Graduate Academy (FGA) Digitalent held by Kominfo</span> about : <span className="text-primary">Scalable Web Services with Golang</span> at <span className="text-secondary">Hacktiv8</span>.</p> */}
            <p className="font-medium font-mono text-primary text-base max-w-xl mb-8 lg:text-lg text-justify">
            I'm currently focused on learning about Front-End web development - <span className="text-secondary">Next.js</span> and Back-End web development - <span className="text-secondary">Java Spring Boot</span>, .
            </p>

            {/* <p className="font-medium font-mono text-primary text-base max-w-xl mb-8 lg:text-lg text-justify">
            I'm currently focused on doing my undergraduate thesis which uses Laravel to make a web-based diagnose application regarding diabetes mellitus disease called <span onClick={onLinkClickedDiaCare} className="text-secondary cursor-pointer">DiaCare</span>.
            </p> */}

            <button className="btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-3 px-8 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-16 lg:mb-6">
              <p onClick={onLinkClickedGitHub}>View GitHub</p>
            </button>
          </div>
          <div data-aos="fade-left" className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-primary text-2xl mb-4 lg:text-3xl lg:pt-10">Education & Experience</h3>
            <hr className="bg-secondary border-none h-1 w-12 mb-5 mt-0 flex aling-items-center" />
            <div className="grid grid-rows-2 gap-5 mb-6 max-w-full text-slate-500  border-black border-2 shadow-lg bg-white py-5">
              <div className="grid grid-cols-4">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">
                  <img data-src={UMN} alt="UMN" className="lazyload max-w-[50px] max-h-[70px] py-1" />
                </div>
                <div className="col-2 col-span-3 items-center">
                  <p className="text-xs lg:text-base">Universitas Multimedia Nusantara</p>
                  <p className="text-xs lg:text-base">Bachelor's Degree | Informatics</p>
                  <p className="text-xs lg:text-base">Aug 2019 - Present</p>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">
                  <img data-src={dicodingTrans} alt="Dicoding" className="lazyload max-w-[50px] max-h-[70px] py-1" />
                </div>
                <div className="col-2 col-span-3">
                  <p className="text-xs lg:text-base">Dicoding</p>
                  <p className="text-xs lg:text-base">Front-End and React</p>
                  <p className="text-xs lg:text-base">Aug 2022 - Dec 2022</p>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">
                  <img data-src={udemy} alt="Udemy" className="lazyload max-w-[50px] max-h-[60px] py-1" />
                </div>
                <div className="col-2 col-span-3">
                  <p className="text-xs lg:text-base">Udemy</p>
                  <p className="text-xs lg:text-base">Modern React with Redux</p>
                  <p className="text-xs lg:text-base">Sep 2022 - Dec 2022</p>
                </div>
              </div>
              {/* <div className="grid grid-cols-4">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">
                  <img data-src={fga} alt="Udemy" className="lazyload max-w-[50px] max-h-[60px] py-1" />
                </div>
                <div className="col-2 col-span-3">
                  <p className="text-xs lg:text-base">Fresh Graduate Academy</p>
                  <p className="text-xs lg:text-base">Scalable Web Services with Golang</p>
                  <p className="text-xs lg:text-base">Mar 2023 - Present</p>
                </div>
              </div> */}
              <div className="grid grid-cols-4">
                <div className="col-1 col-span-1  font-bold text-2xl text-primary flex justify-center items-center">
                  <img data-src={udemy} alt="Udemy" className="lazyload max-w-[50px] max-h-[60px] py-1" />
                </div>
                <div className="col-2 col-span-3">
                  <p className="text-xs lg:text-base">Udemy</p>
                  <p className="text-xs lg:text-base">Spring Boot 3, 6 & Hibernate</p>
                  <p className="text-xs lg:text-base">Jul 2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 text-center mt-16 lg:mt-20 mb-4">
          <h4 className="font-semibold text-primary mb-4 text-2xl lg:text-3xl ">My Skills</h4>
          <div className="grid grid-cols-3 ">
            <button className={skills === 1 ? "bg-black text-white border-2 py-3 px-3 ease-out duration-300 mb-6" : "bg-white text-black border-2 py-3 px-3 ease-out duration-300 mb-6 hover:border-secondary"} onClick={onClickFront}>
              <span className="text-xs md:text-base">FrontEnd</span>
            </button>
            <button className={skills === 2 ? "bg-black text-white border-2 py-3 px-3 ease-out duration-300 mb-6" : "bg-white text-black border-2 py-3 px-3 ease-out duration-300 mb-6 hover:border-secondary"} onClick={onClickBack}>
              <span className="text-xs md:text-base">BackEnd</span>
            </button>
            <button className={skills === 3 ? "bg-black text-white border-2 py-3 px-3 ease-out duration-300 mb-6" : "bg-white text-black border-2 py-3 px-3 ease-out duration-300 mb-6 hover:border-secondary"} onClick={onClickOther}>
              <span className="text-xs md:text-base">Other</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:grid-cols-5 text-4xl lg:text-5xl text-slate-500">{skills === 1 ? <FrontEndSkills /> : skills === 2 ? <BackEndSkills /> : <OtherSkills />}</div>

        <div className="w-full px-4 text-center mt-16 lg:mt-20 mb-4">
          <h4 className="font-semibold text-primary mb-4 text-2xl lg:text-3xl ">My Certificate</h4>
          <p className="font-medium text-base font-mono text-slate-500 lg:text-lg">
            Here are 2 of my Expert Certification,
            <br />
            to see all of my 12 certificate click{" "}
            <span onClick={onLinkClickedCertif} className="cursor-pointer text-secondary font-bold hover:text-primary">
              here
            </span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {dataExpert.map((expert) => { 
            return (
              <div key={expert.id}  className="mb-12 p-4 md:w-1/2">
                <div className="rounded-sm shadow-lg border-2 border-primary overflow-hidden" data-aos="fade-up">
                  <img data-src={expert.img} className="lazyload" alt="React Web Developer Expert" width={"w-full"} />
                </div>
                <h3 className="font-semibold text-primary text-lg mt-5 mb-3">{expert.title}</h3>
                <p className="font-medium font-mono text-base text-slate-500">{expert.description}</p>
                <p className="font-medium font-mono text-base text-slate-500">{expert.description2}</p>
                <p className="font-medium font-mono text-base text-slate-500">{expert.description3}</p>
                <button className="mt-3 btnn bg-black hover:bg-white text-white hover:text-black border-black border-2 py-2 px-6 ease-out duration-300 focus:outline-none focus:ring focus:ring-blue-500 mb-6">
                  <p onClick={() => onLinkClickedExpert(expert.link)}>Show Credential</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;