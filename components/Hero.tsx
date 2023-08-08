'use client';

import TechStack from './TechStack';

const Hero = () => {
  return (
    <section className='container flex-col items-center justify-center py-12 lg:py-48 gap-8'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-4xl lg:text-7xl text-center'>Hey! I'm Matt Czencz</h1>
        <small className='text-base italic font-extralight'>Pronunciation: Senz</small>
      </div>
      <p className='text-lg text-center'>
        A <span className='font-bold'>frontend developer, passionate engineer, and computer geek</span> based in Colorado. <br />
        My goal is to engineer phenomonal user experiences.
      </p>
      <TechStack />
    </section>
  );
};

export default Hero;