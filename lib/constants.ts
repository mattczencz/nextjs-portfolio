import RicohPhoto from '@/public/screenshots/ricoh-screenshot.png';
import ClearchoicePhoto from '@/public/screenshots/clearchoice-screenshot.png';
import ElmontereyPhoto from '@/public/screenshots/elmonterey-screenshot.png';
import TrackflowPhoto from '@/public/screenshots/taskflow-dashboard.jpg';
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
    title: 'TrackFlow',
    description: "Leveraging the power of Next.js 14, Prisma, and MySQL, I built a robust and scalable platform that seamlessly manages tasks. The app's sleek and intuitive user interface is powered by Radix UI, providing a seamless user experience. This project showcases my proficiency in full-stack development, from designing interactive interfaces to implementing efficient backend solutions. Check out this project in my portfolio to witness firsthand how I bring innovation and functionality together in the digital realm.",
    image: TrackflowPhoto,
    codeLink: 'https://github.com/mattczencz/trackflow',
    liveLink: 'https://trackflow-mattczencz.vercel.app/',
    languages: [
      'Next.js 14',
      'Prisma',
      'MySQL',
      'Radix UI'
    ],
  },
  {
    title: 'Clearchoice Patient Portal',
    description: 'The Clearchoice Patient Portal is a web-app at it\'s core. This is a platform where patients can view their upcoming dental appointments, surgeries, and find general info. With the assistance of Next.js, I helped build most of the components, the entire messaging center where patients can talk with their doctors, and much more. Unfortunately, the portal is not publically available for anyone to see, however please hover over the image to take a peak at some of my work!',
    image: ClearchoicePhoto,
    languages: [
      'Next.js',
      'Tailwind',
    ],
  },
  {
    title: 'Ricoh Document Scanners',
    description: 'Ricoh Document Scanners (formerly Fujitsu Scanners) was one of the biggest clients I have had the privilege to work with. Recently we added a full e-commerce flow throughout their entire site, so users could purchase products directly from them. This includes account creation and authorization, order and payment handling, address verification, and much more.',
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
    description: 'Who doesn\'t love burritos, chimichangas, and tacos? This project was solely about breathing new life and building them a new fun and modern website that held their family values. My part in this project included creating complex animations, various texture effects, and keeping their company message sprinkled throughout this delicious site.',
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
