import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col px-4 lg:px-0'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
