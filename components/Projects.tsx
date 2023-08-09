import { Project, workProjects } from '@/lib/constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className='container content-section gap-16 lg:bg-theme-background'>
      <div className='flex flex-col justify-start gap-4 w-full max-w-6xl'>
        <h3 className='text-2xl text-theme-primary'>Portfolio</h3>
        <h3 className='text-3xl'>Developing user experiences that help you succeed</h3>
      </div>
      <div className='flex flex-col gap-16 max-w-6xl'>
        {
          workProjects.map((project: Project, index: number) => (
            <ProjectCard orientation={index % 2 === 0 ? 'left' : 'right'} project={project} />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;