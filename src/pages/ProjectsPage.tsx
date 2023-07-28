import Swal from "sweetalert2";
import ReadMore from "../components/ReadMore";
import dataProjects from "../utils/data-project";

const ProjectsPage = () => {
  const imageProjectClick = (link: string) => {
    return Swal.fire({
      title: "Visit This Website?🚀",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href=${link} target="blank" >Open it in new tab!!🔥</a>`,
      icon: "question",
    });
  };

  const onLinkClickedGitHub = () => {
    Swal.fire({
      title: "See all my Projects on GitHub🛰️",
      confirmButtonColor: "#3B82F6",
      confirmButtonText: `<a classname="btnn" href="https://github.com/vincentt14" target="blank" >Open it in new tab!!🔥</a>`,
      icon: "warning",
    });
  };

  return (
    <section id="project" className="pb-16 pt-32 lg:pb-28 bg-[#f2f6fc]">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-secondary mb-2">Projects</h4>
            <h2 className="font-bold text-primary text-3xl mb-4">Latest Project</h2>
            <p className="font-medium text-md font-mono text-slate-500 lg:text-lg">
              Here are some of my Projects,
              <br />
              to see all of my projects click{" "}
              <span onClick={onLinkClickedGitHub} className="cursor-pointer text-secondary font-bold hover:text-primary">
                here
              </span>
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {dataProjects.map((project) => {
            return ( 
              <div key={project.id} className="mb-12 p-4 md:w-1/2">
                <div className="rounded-sm shadow-lg border-2 border-primary overflow-hidden cursor-pointer hover:border-secondary" onClick={() => imageProjectClick(project.link)}>
                  <img data-src={project.img} className="lazyload" alt="Discussion Forum" width={"w-full"} />
                </div>
                <h3 className="font-semibold text-secondary text-xl mt-5 mb-3">
                  <p className="text-primary">{project.title}</p>
                </h3>
                <ReadMore>{project.description}</ReadMore>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
