'use client';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const navbarData = {
  logo: {
    src: '/images/vmpflogo.png',
    alt: 'VMPF Logo',
  },
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Book A Demo',
    href: '/demo',
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={isSticky ? 'h-[80px]' : 'h-0'} />
      <header
        className={`z-50 w-full transition-all duration-300
        ${isSticky ? 'fixed top-0 left-0 bg-[#0a3f2a]/95 shadow-xl' : 'relative bg-transparent'}`}
      >
        <nav className="inner-wrapper mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
          <Link href={'/'}>
            <Image
              src={navbarData.logo.src}
              height={40}
              width={80}
              alt={navbarData.logo.alt}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navbarData.links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-white hover:opacity-80">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Button label={navbarData.cta.label} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
            aria-label="Open menu"
          >
            <FiMenu size={26} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[70%] bg-[#2E7D5A]/95
        transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-white">
            <FiX size={26} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="space-y-6 px-6">
          {navbarData.links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block text-base font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-6 w-60">
          <Button label={navbarData.cta.label} className="w-full" />
        </div>
      </aside>
    </>
  );
}
