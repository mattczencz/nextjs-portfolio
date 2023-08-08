import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='container flex-col items-center justify-center py-12 lg:py-48 lg:bg-slate-50'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-stretch max-w-6xl'>
        <Image
          src='https://images.unsplash.com/photo-1423450822265-fcd97e52ecb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2104&q=80'
          alt='Welcome to Colorado sign'
          width={400}
          height={400}
          title='Welcome to Colorado sign'
          className='rounded-2xl'
        />
        <div className='flex flex-col justify-start gap-4'>
          <h3 className='text-2xl text-theme-primary'>About Me</h3>
          <h3 className='text-3xl'>A passionate engineer based in Colorado, USA</h3>
          <p className='text-lg mt-4'>Sit consectetur mollit anim sint ex eu ea in nulla anim sit sunt ipsum. Cillum amet do exercitation velit. Ullamco aute excepteur nostrud duis incididunt est mollit quis ea ut qui. Nisi tempor reprehenderit aute nulla sit non et aute reprehenderit adipisicing voluptate. Excepteur sunt velit deserunt incididunt amet anim dolor.</p>
        </div>
      </div>
    </section>
  );
};

export default About;