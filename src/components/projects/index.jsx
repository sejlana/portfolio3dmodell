import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className='w-full max-w-4xl px-16 space-y-6 flex-col items-center'>
      {projects.map((project, index) => (
        <ProjectLayout key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
