import { TechLogo, techLogos } from '@/lib/constants';
import Image from 'next/image';

const TechStack = () => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <p className='text-xl lg:text-2xl text-theme-heading-text w-fit m-auto after:block after:w-3/4 after:h-1 after:border-t-2 after:m-auto after:mt-4 after:border-theme-accent'>
        Tech Stack
      </p>
      <ul className='flex gap-4 flex-wrap justify-center max-w-xs md:max-w-full'>
        {
          techLogos.map(({ url, alt }: TechLogo) => (
            <li key={alt} className='flex items-center justify-center rounded-full bg-white shadow-xl w-16 h-16 border-theme-accent/25 border'>
              <Image
                src={url}
                alt={alt}
                width={32}
                height={32}
                title={alt}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TechStack;