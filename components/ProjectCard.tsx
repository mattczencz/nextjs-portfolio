import { Project } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Props {
  orientation: 'left' | 'right';
  project: Project;
};

const ProjectCard = ({
  orientation,
  project: { title, description, image, codeLink, liveLink, languages }
}: Props) => {
  return (
    <div className={`flex flex-col lg:items-center bg-white shadow-lg rounded-2xl p-4 lg:p-8 gap-12 ${orientation === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <div className='drop-shadow-md rounded-2xl overflow-hidden relative w-full lg:w-1/2 h-[400px]'>
        <Image
          src={image}
          alt={title}
          priority
          className='object-cover object-top scrolling-image transition duration-[10000ms] ease-in-out relative'
        />
      </div>
      <div className='flex flex-col items-center w-full lg:w-1/2 gap-8'>
        <h3 className='text-xl'>{title}</h3>
        <p className='text-center text-lg'>{description}</p>
        <div className='flex gap-8 flex-wrap justify-center'>
          {
            languages.map((language: string) => (
              <h3 className='px-4 py-2 shadow-md rounded-2xl border-theme-accent/25 border'>{language}</h3>
            ))
          }
        </div>
        {
          (liveLink || codeLink) && (
            <div className='flex gap-8 flex-wrap justify-center'>
              {
                codeLink && (
                  <Link href={codeLink} className='project-link' target='_blank'>
                    <FiGithub />
                    Code
                  </Link>
                )
              }
              {
                liveLink && (
                  <Link href={liveLink} className='project-link' target='_blank'>
                    <FiExternalLink />
                    Live Site
                  </Link>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProjectCard;