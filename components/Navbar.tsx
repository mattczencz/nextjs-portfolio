'use client';

import Link from 'next/link';
import { NavLink, navLinks } from '@/lib/constants';
import { useState } from 'react';
import { FiHome, FiUser, FiCode, FiMail } from 'react-icons/fi';


const Navbar = () => {
  const [activePath, setActivePath] = useState<string>('/');

  return (
    <nav className='p-8 shadow-sm bg-white'>
      <div className='container items-center justify-between'>
        <Link
          href='/'
          className='nav-logo'
          onClick={() => setActivePath('/')}
        >
          <h3 className='text-lg'>Matt Czencz <span className='hidden md:inline-block'>- Frontend Developer</span></h3>
        </Link>

        {/* Tablet & Desktop Nav */}
        <ul className='hidden md:flex items-center gap-4'>
          {
            navLinks.map(({ label, route }: NavLink) => (
              <li key={label}>
                <Link
                  href={route}
                  className={`nav-link ${ activePath === route && 'nav-link-active' }`}
                  onClick={() => setActivePath(route)}
                >
                  {label}
                </Link>
              </li>
            ))
          }
        </ul>

        {/* Mobile Nav */}
        <ul className='flex md:hidden items-center justify-center gap-8 fixed bg-white bottom-8 right-8 left-8 shadow-lg rounded-full w-fit m-auto py-4 px-8'>
          {
            navLinks.map(({ label, route }: NavLink) => {
              const matchIcon = (size: number) => {
                switch (label) {
                  case 'About':
                    return <FiUser size={size} />;
                  case 'Projects':
                    return <FiCode size={size} />;
                  case 'Contact':
                    return <FiMail size={size} />;
                  default:
                    return <FiHome size={size} />;
                }
              };

              return (
                <li key={label}>
                  <Link
                    href={route}
                    className={`nav-link ${ activePath === route && 'nav-link-active' }`}
                    onClick={() => setActivePath(route)}
                  >
                    {
                      matchIcon(24)
                    }
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;