import RicohPhoto from '@/public/screenshots/ricoh-screenshot.png';
import ClearchoicePhoto from '@/public/screenshots/clearchoice-screenshot.png';
import ElmontereyPhoto from '@/public/screenshots/elmonterey-screenshot.png';
import { StaticImageData } from 'next/image';

export interface NavLink {
  label: string;
  route: string;
};

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/#about',
  },
  {
    label: 'Projects',
    route: '/#projects',
  },
  {
    label: 'Contact',
    route: '/#contact',
  },
];

export interface Project {
  title: string;
  description: string;
  image: string | StaticImageData;
  codeLink?: string;
  liveLink?: string;
  languages: string[];
};

export const workProjects: Project[] = [
  {
    title: 'Clearchoice Patient Portal',
    description: 'Occaecat ipsum fugiat voluptate nisi magna ea fugiat quis voluptate sint nisi aute et. Eu aliquip velit nisi sunt officia dolore sunt eiusmod ut occaecat incididunt exercitation. Pariatur laborum dolor veniam sit Lorem. Nisi aliqua pariatur cupidatat et culpa laboris excepteur veniam cupidatat non magna pariatur. Id reprehenderit ex exercitation elit amet elit. Exercitation esse commodo occaecat do eu fugiat ex ut qui labore exercitation. Incididunt amet nisi enim nulla qui.',
    image: ClearchoicePhoto,
    languages: [
      'Next.js',
      'Tailwind',
    ],
  },
  {
    title: 'Clearchoice Mobile App',
    description: 'Anim irure velit excepteur sint nostrud laboris elit ad. Magna magna exercitation exercitation ex pariatur aliquip deserunt. Reprehenderit in aliquip dolore exercitation exercitation deserunt officia esse dolore nisi. Magna deserunt pariatur laboris irure.',
    image: ClearchoicePhoto, // TODO: Get screenshot of mobile app
    languages: [
      'React Native',
      'Tailwind',
    ],
  },
  {
    title: 'Ricoh Document Scanners',
    description: 'Cillum sit proident magna eiusmod pariatur tempor et. Est irure consequat mollit reprehenderit id minim. Labore reprehenderit tempor cupidatat qui excepteur cillum fugiat minim in velit et laborum labore. Eu irure laboris veniam ipsum minim aute in. Aliquip proident dolore incididunt sint elit exercitation. Eu ut nulla cillum tempor veniam fugiat eiusmod tempor irure.',
    image: RicohPhoto,
    liveLink: 'https://www.pfu-us.ricoh.com/',
    languages: [
      'JavaScript',
      'Sass',
      'C# .Net',
    ],
  },
  {
    title: 'El Monterey',
    description: 'Enim sunt duis laborum laboris dolor officia enim. Aute quis nostrud pariatur ut deserunt irure elit sint consequat dolor aliqua fugiat adipisicing. Amet voluptate officia cupidatat minim adipisicing do. Reprehenderit irure dolore aliquip sit est. Exercitation dolor laborum elit labore nostrud. Non nulla cupidatat incididunt labore id tempor Lorem.',
    image: ElmontereyPhoto,
    liveLink: 'https://elmonterey.com/',
    languages: [
      'JavaScript',
      'Sass',
      'PHP',
    ],
  },
];

// TODO: Add personal projects

export interface TechLogo {
  alt: string;
  url: string;
}

export const techLogos: TechLogo[] = [
  {
    alt: 'HTML5',
    url: '/html.svg',
  },
  {
    alt: 'CSS3',
    url: '/css3.svg',
  },
  {
    alt: 'JavaScript',
    url: '/javascript.svg',
  },
  {
    alt: 'Next.js',
    url: '/next-js.svg',
  },
  {
    alt: 'Tailwind CSS',
    url: '/tailwind.svg',
  },
  {
    alt: 'SCSS',
    url: '/scss.svg',
  },
];